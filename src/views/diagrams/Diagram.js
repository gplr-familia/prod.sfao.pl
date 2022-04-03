import moment from 'moment';
import 'moment/locale/pl';

import React, {Component} from 'react';
import {compose} from 'recompose';
import {translate} from 'react-admin';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';

import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

import {intlShape} from 'react-intl';

import DiagramReducer from './../../reducers/Diagram';

import restClient from '../../providers/rest';
import {GET_ONE} from 'react-admin';
import Icon from '@material-ui/core/Icon';

const dateFormat = {month: 'short', day: 'numeric'};

const styles = {
  card: {marginBottom: '2em'},
  title: {display: 'flex', alignItems: 'center'},
  icon: {marginRight: '0.25em'}
};

class Diagram extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      name: props.name,
      icon: props.icon,
      userId: props.userId,
      diagram: [],
      unit: ''
    };
  }

  populateRecommendations(data) {
    let newData = {
      data: []
    };

    for (let i = 0; i < data.data.length; i++) {
      if (this.getDateAt(data.data[i]) === this.getDateEnds(data.data[i])) {
        newData.data.push(data.data[i]);
        continue;
      }

      do {
        newData.data.push(Object.assign({}, data.data[i]));
        data.data[i].at = moment(data.data[i].at).add(1, 'd').format();
      }
      while (this.getDateAt(data.data[i]) !== this.getDateEnds(data.data[i]));
    }

    return newData;
  }

  getDateAt(recommendation) {
    const {intl} = this.context;
    return intl.formatDate(recommendation.at, dateFormat);
  }

  getDateEnds(recommendation) {
    const {intl} = this.context;
    return intl.formatDate(recommendation.ends, dateFormat);
  }

  updateDiagramData(data, resource) {
    if ('recommendations' === resource) {
      data = this.populateRecommendations(data);
    }

    const {intl} = this.context;
    let {diagram} = this.state;
    const length = data.data.length;

    for (let i = 0; i < length; i++) {
      const date = 'measurements' === resource ? moment(data.data[i].created) : moment(data.data[i].at);

      diagram = diagram.map(item => {
        const values = 'measurements' === resource ?
          {activity: (item.activity + data.data[i].value), activityInserts: item.activityInserts + 1} :
          {
            recommendation: (item.recommendation + data.data[i].value),
            recommendationInserts: item.recommendationInserts + 1
          };

        if (item.date === intl.formatDate(date, dateFormat)) {
          return {...item, ...values};
        }

        return item;
      });
    }

    diagram = diagram.map(item => {
      const activity = 0 !== item.activityInserts ? (item.activity / item.activityInserts) : item.activity;
      const recommendation = 0 !== item.recommendationInserts ? (item.recommendation / item.recommendationInserts) : item.recommendation;
      return {...item, ...{activity, recommendation}};
    });

    this.setState({diagram: diagram});
  }

  updateUnit(measurementType) {
    this.setState({unit: measurementType.unit});
  }

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.from !== prevProps.from || this.props.to !== prevProps.to || this.props.userId !== prevProps.userId) {
      this.setState({userId: this.props.userId}, () => {
        this.fetch();
      });
    }
  }

  fetch() {
    const {from, to} = this.props;
    const {intl} = this.context;
    const diffInDays = moment(to).diff(moment(from), 'days');

    let diagram = [];
    for (let i = 0; i < diffInDays + 1; i++) {
      diagram.push({
        activityInserts: 0,
        recommendationInserts: 0,
        date: intl.formatDate(moment(to).subtract(i, 'days'), dateFormat),
        activity: 0,
        recommendation: 0
      });
    }

    this.setState({diagram: diagram.reverse()});

    restClient(GET_ONE, 'measurement_types', {id: this.state.id}).then(data => this.updateUnit(data.data));

    DiagramReducer({
      resource: 'measurements',
      typeId: this.state.id,
      userId: this.state.userId,
      from: moment(from),
      to: moment(to)
    }).then(data => this.updateDiagramData(data, 'measurements'));
    DiagramReducer({
      resource: 'recommendations',
      typeId: this.state.id,
      userId: this.state.userId,
      from: moment(from),
      to: moment(to)
    }).then(data => this.updateDiagramData(data, 'recommendations'));
  }

  render() {
    const {translate} = this.props;
    return (
      <Card style={styles.card}>
        <CardContent>
          <div style={styles.title}>
            {this.state.icon && <Icon style={styles.icon}>{this.state.icon}</Icon>}
            <Typography>{this.state.name}</Typography>
          </div>
          <ResponsiveContainer height={300} width="90%" className="recharts-responsive-container-center">
            <LineChart data={this.state.diagram}>
              <CartesianGrid/>
              <XAxis dataKey="date"/>
              <YAxis unit={this.state.unit}/>
              <Tooltip/>
              <Legend verticalAlign="top" align="left" height={48}/>
              <Line
                type="monotone"
                dataKey="recommendation"
                stroke="#8884d8"
                name={translate('views.diagrams.chart.recommendation')}/>
              <Line
                type="monotone"
                dataKey="activity"
                stroke="#82ca9d"
                name={translate('views.diagrams.chart.activity')}/>
            </LineChart>
          </ResponsiveContainer>

        </CardContent>
      </Card>
    );
  }
}

Diagram.contextTypes = {
  translate: PropTypes.func,
  intl: intlShape.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

const enhance = compose(
  translate,
);

export default enhance(Diagram);
