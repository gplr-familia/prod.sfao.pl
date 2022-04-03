import React, {Component} from 'react';

import Recommendation from './cardListItems/Recommendation';
import Activity from './cardListItems/Activity';
import Thread from './cardListItems/Thread';

import CardList from './CardList';

import getRecommendations from './../reducers/Recommendations';
import getActivities from './../reducers/Activities';
import getThreads from './../reducers/Threads';
import getDrugs from './../reducers/Drugs';
import getAppointments from './../reducers/Appointments';
import getDietRecommendations from './../reducers/DietRecommendations';

import {crudGetList, translate} from 'react-admin';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import moment from 'moment';
import RecommendationWithButtons from './cardListItems/RecommendationWithButtons';
import GenericWithDescription from './cardListItems/GenericWithDescription';
import PermissionHelper from '../helpers/PermissionHelper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import axios from '../providers/axios';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const styles = {
  flex: {display: 'flex'},
  none: {},
  left: {marginRight: '1em', marginBottom: '2em'},
  right: {marginLeft: '1em', marginBottom: '2em'},
  upDown: {marginTop: '2em', marginBottom: '2em'}
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.state = {
      userId: undefined,
      users: [],
      recommendationsWithButtons: [],
      recommendations: [],
      activities: [],
      threads: [],
      drugs: [],
      appointments: [],
      diet_recommendations: []
    };

    this.handleChangeUser = this.handleChangeUser.bind(this);
  }

  componentDidMount() {
    getThreads().then((data) => this.setState({threads: data.data}));

    if (PermissionHelper.isAdmin()) {
      this.fetchUsers();
    }

    this.fetchAll();
  }

  fetchAll() {
    const {userId} = this.state;

    if (!PermissionHelper.isAdmin()) {
      getRecommendations({userId, filter: {status: 'EVALUATE', at: {before: moment().endOf('day').format()}}}).then((data) => this.setState({recommendationsWithButtons: data.data}));
    }

    if (!PermissionHelper.isAdmin() || this.state.userId) {
      getActivities({userId}).then((data) => this.setState({activities: data.data}));
      getRecommendations({userId}).then((data) => this.setState({recommendations: data.data}));
      getDrugs({userId}).then((data) => this.setState({drugs: data.data}));
      getAppointments({userId}).then((data) => this.setState({appointments: data.data}));
      getDietRecommendations({userId}).then((data) => this.setState({diet_recommendations: data.data}));
    }
  }

  fetchUsers() {
    axios().get('users', this.state.params).then(({data}) => this.setState({users: data}));
  }

  handleChangeUser({target: {value}}) {
    this.setState({userId: value}, () => {
      this.fetchAll();
    });
  }

  render() {
    const {translate} = this.props;

    return (
      <div>
        <div>
          <div style={styles.flex}>
            {!PermissionHelper.isAdmin() && <CardList
              style={styles.left}
              itemFunction={RecommendationWithButtons}
              items={this.state.recommendationsWithButtons}
              backgroundColor="#159688"
              cardTitle="dashboard.recommendationsToEvaluate.title"
              flatButtonLabel="dashboard.recommendationsToEvaluate.more"
              flatButtonHref='/#/recommendations?filter=%7B"status"%3A"EVALUATE"%7D'/>}
            <CardList
              style={PermissionHelper.isAdmin() ? styles.none : styles.right}
              itemFunction={Thread}
              items={this.state.threads}
              backgroundColor="#0f7194"
              cardTitle={`dashboard.threads.title.${PermissionHelper.isAdmin() ? 'doctor' : 'patient'}`}
              flatButtonLabel="dashboard.threads.more"
              flatButtonHref="/#/threads/my"/>
          </div>
          {PermissionHelper.isAdmin() &&
          <div style={styles.upDown}>
            <Card>
              <CardContent>
                <FormControl required>
                  <Select value={this.state.userId} displayEmpty onChange={this.handleChangeUser}>
                    <MenuItem key="empty" value="">{translate('dashboard.inputs.userEmpty')}</MenuItem>
                    {this.state.users.map(user => <MenuItem
                      key={user.id}
                      value={`/api/users/${user.id}`}
                    >{user.fullname}</MenuItem>)}
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </div>}
          {(!PermissionHelper.isAdmin() || (PermissionHelper.isAdmin() && this.state.userId)) && <div>
            <div style={styles.flex}>
              <CardList
                style={styles.left}
                itemFunction={Recommendation}
                items={this.state.recommendations}
                backgroundColor="#159688"
                cardTitle="dashboard.recommendations.title"
                flatButtonLabel="dashboard.recommendations.more"
                flatButtonHref="/#/calendar"/>
              <CardList
                style={styles.right}
                itemFunction={Activity}
                items={this.state.activities}
                backgroundColor="#bb26dd"
                cardTitle="dashboard.activities.title"
                flatButtonLabel="dashboard.activities.more"
                flatButtonHref="/#/diagrams"/>
            </div>
            <div style={styles.flex}>
              <CardList
                style={styles.left}
                itemFunction={GenericWithDescription}
                items={this.state.drugs}
                backgroundColor="#159688"
                cardTitle="dashboard.drugs.title"
                flatButtonLabel="dashboard.drugs.more"
                flatButtonHref='/#/drugs'
              />
              <CardList
                style={styles.right}
                itemFunction={GenericWithDescription}
                items={this.state.appointments}
                backgroundColor="#159688"
                cardTitle="dashboard.appointments.title"
                flatButtonLabel="dashboard.appointments.more"
                flatButtonHref='/#/appointments'
              />
            </div>
            <div style={styles.flex}>
              <CardList
                itemFunction={GenericWithDescription}
                items={this.props.diet_recommendations}
                backgroundColor="#159688"
                cardTitle="dashboard.diet_recommendations.title"
                flatButtonLabel="dashboard.diet_recommendations.more"
                flatButtonHref='/#/diet_recommendations'
              />
            </div>
          </div>}
        </div>
      </div>
    );
  }
}

const enhance = compose(
  translate
);

export default enhance(Dashboard);
