import React from 'react'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import PermissionHelper from '../../helpers/PermissionHelper';
import Card from '@material-ui/core/Card';
import moment from 'moment';
import {compose} from 'recompose';
import {withStyles} from '@material-ui/core';
import {translate, SaveButton, CREATE, GET_LIST, UPDATE} from 'react-admin';
import PropTypes from 'prop-types';
import restClient from '../../providers/rest';

const styles = theme => ({
  summaryCard: {
    marginTop: '24px'
  },
  summaryTextField: {
    marginTop: '24px',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  summarySaveButton: {
    marginTop: '24px',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class Summary extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      id: undefined,
      starts: moment().format('DD/MM/YYYY'),
      ends: moment().format('DD/MM/YYYY'),
      user: undefined,
      description: undefined
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {starts, ends, user} = this.props;

    if (
      this.state.user !== user ||
      this.state.starts !== starts ||
      this.state.ends !== ends
    ) {
      this.setState({starts, ends, user}, () => {
        this.fetchSummary();
      });
    }
  }

  fetchSummary() {
    const params = {
      pagination: {page: 1, perPage: 1000},
      sort: {field: 'id', order: 'desc'},
      filter: {starts: moment(this.state.starts).format('YYYY-MM-DD'), ends: moment(this.state.ends).format('YYYY-MM-DD'), user: this.state.user},
      groups: []
    };

    if (PermissionHelper.isAdmin() && !this.state.user) {
      return;
    }

    return restClient(GET_LIST, 'summaries', params)
      .then(({data}) => {
        if (data.length) {
          this.setState({id: data[0].id, description: data[0].description});
        }
      })
      .catch(() => console.log('x'));
  }

  handleSubmit() {
    const {starts, ends, user, description, id} = this.state;

    restClient(id ? UPDATE : CREATE, 'summaries', {id: id, data: {starts, ends, user, description}})
      .then(() => {
        console.log('done!');
      })
      .catch(() => {
        console.log('error!');
      })
  }

  render() {
    const {starts, user, ends, description} = this.state;
    const {translate} = this.props;

    if (!(starts && ends && (user || description))) {
      return <div></div>;
    }

    return (<Card className={this.props.classes.summaryCard}>
      <CardHeader title={translate('views.calendar.section.summary.title')}/>
      <CardContent>
        <TextField
          className={this.props.classes.summaryTextField}
          disabled
          label={translate('views.calendar.section.summary.inputs.summaryStarts')}
          value={starts}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          className={this.props.classes.summaryTextField}
          disabled
          label={translate('views.calendar.section.summary.inputs.summaryEnds')}
          value={ends}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          className={this.props.classes.summaryTextField}
          disabled={!PermissionHelper.isAdmin()}
          label={translate('views.calendar.section.summary.inputs.description')}
          InputLabelProps={{
            shrink: true,
          }}
          placeholder={translate('views.calendar.section.summary.inputs.placeholders.description')}
          value={description}
          onChange={({target: {value}}) => this.setState({description: value})}
          fullWidth
        />

        {PermissionHelper.isAdmin() && <SaveButton
          className={this.props.classes.summarySaveButton}
          onClick={this.handleSubmit}
        />}
      </CardContent>
    </Card>);
  }
}

Summary.propTypes = {
  starts: PropTypes.string,
  ends: PropTypes.string,
  user: PropTypes.string
};

const enhance = compose(
  withStyles(styles),
  translate
);

export default enhance(Summary);
