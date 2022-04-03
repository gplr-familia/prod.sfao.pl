import moment from 'moment';
import 'moment/locale/pl';
import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import restClient from '../providers/rest';
import {GET_LIST} from 'react-admin';
import Modal from '@material-ui/core/Modal';
import {compose} from 'recompose';
import {withStyles} from '@material-ui/core';
import Notification from '../components/notifications/Notification';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import axios from '../providers/axios';
import {translate} from 'react-admin';
import FormControl from '@material-ui/core/FormControl';
import Divider from '@material-ui/core/Divider';
import PermissionHelper from '../helpers/PermissionHelper';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import Summary from './calendar/Summary';

const styles = theme => ({
  calendar: {padding: '20px'},
  paper: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    padding: '10px'
  }
});

const mapRecommendationToEvent = (recommendation) => {
  const title = `Zalecenie dla ${recommendation.type.name} wartość ${recommendation.value} ${recommendation.type.unit}`;
  const at = moment(recommendation.at);

  if (!recommendation.recurring_day_of_week.length) {
    return {
      _cId: recommendation.id,
      title: title,
      start: at.format(),
      end: null !== recommendation.ends ? moment(recommendation.ends).format() : null,
      allDay: recommendation.whole_day,
      backgroundColor: recommendation.type.color
    };
  }

  return {
    _cId: recommendation.id,
    title: title,
    start: !recommendation.whole_day ? at.format('LT') : null,
    end: !recommendation.whole_day && null !== recommendation.ends ? moment(recommendation.ends).format('LT') : null,
    dow: recommendation.recurring_day_of_week,
    allDay: recommendation.whole_day,
    ranges: recommendation.recurring_from ? [{
      start: moment(recommendation.recurring_from).format('MM-DD-YYYY'),
      end: recommendation.recurring_to
        ? moment(recommendation.recurring_to).format('MM-DD-YYYY')
        : null,
    }] : [],
    backgroundColor: recommendation.type.color
  };
};

const mapGenericEvent = (resource, array) => {
  switch (resource) {
    case 'recommendations':
      return array.map(mapRecommendationToEvent);
    case 'appointments':
      return array.map(i => ({
        title: `Wizyta ${i.description}`,
        start: moment(i.at).format()
      }));
    case 'drugs':
      return array.map(i => ({
        title: `Weź leki ${i.description}`,
        start: moment(i.at).format()
      }));
    case 'meals':
      return array.map(i => ({
        title: `Posiłek ${i.description}`,
        start: moment(i.at).format()
      }));
    case 'physical_efforts':
      return array.map(i => ({
        title: `Wysiłek ${i.description}`,
        start: moment(i.at).format()
      }));
    case 'measurements':
      return array.map(i => ({
        title: 'Pomiar wykonany',
        start: moment(i.at).format()
      }));
    case 'notifications':
      return array;
    default:
      return array;
  }
};

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      params: {pagination: {page: 1, perPage: 1000}, sort: {field: 'id', order: 'desc'}, filter: {}, groups: []},
      recommendations: [],
      appointments: [],
      notifications: [],
      drugs: [],
      meals: [],
      physical_efforts: [],
      measurements: [],
      users: [],
      activeNotification: false,
      userId: '',
      summary: {
        starts: moment().format('DD/MM/YYYY'),
        ends: moment().format('DD/MM/YYYY')
      }
    };

    this.handleChangeUser = this.handleChangeUser.bind(this);
  }

  componentDidMount() {
    if (PermissionHelper.isAdmin()) {
      this.fetchUsers();
    } else {
      this.fetchAll();
    }
  }

  fetchAll() {
    this.fetchGenericEvent('drugs');
    this.fetchGenericEvent('meals');
    this.fetchGenericEvent('physical_efforts');
    this.fetchGenericEvent('measurements');
    this.fetchGenericEvent('appointments');
    this.fetchGenericEvent('recommendations', {}, ['measurement_type']).then(() => {
      this.fetchGenericEvent('notifications', {createdFor: this.state.recommendations.map(({_cId}) => `/api/recommendations/${_cId}`)});
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.userId !== prevState.userId) {
      this.fetchAll();
    }
  }

  fetchUsers() {
    axios().get('users', this.state.params).then(({data}) => this.setState({users: data}));
  }

  fetchGenericEvent(resource, additionalFilter = {}, additionalGroups = []) {
    const params = this.state.params;

    return restClient(GET_LIST, resource, {
      ...params,
      ...{
        filter: {
          ...params.filter,
          ...additionalFilter
        },
        groups: [...params.groups, ...additionalGroups]
      }
    }).then(({data}) => {
      this.setState({[resource]: mapGenericEvent(resource, data)});
    });
  }

  handleEventClicked(info) {
    const notification = this.state.notifications
      .find(notification => moment(notification.at).format('YYYY-MM-DDHH:mm') === info._start.format('YYYY-MM-DDHH:mm'));

    this.setState({activeNotification: notification});
  }

  handleChangeUser({target: {value}}) {
    this.setState({
      events: [],
      appointments: [],
      notifications: [],
      userId: value,
      params: {
        pagination: {page: 1, perPage: 1000},
        sort: {field: 'id', order: 'desc'},
        filter: {user: value},
        groups: []
      },
      summary: {...this.state.summary, ...{user: value}}
    });
  }

  handleViewRender({view: {currentStart, currentEnd}}) {
    const {ends, starts} = this.state.summary;
    const formattedIntervalStart = moment(currentStart).format('DD/MM/YYYY');
    const formattedIntervalEnd = moment(currentEnd).format('DD/MM/YYYY');

    if (formattedIntervalEnd === ends && formattedIntervalStart === starts) {
      return;
    }

    return this.setState({summary: {...this.state.summary, ...{starts: formattedIntervalStart, ends: formattedIntervalEnd}}});
  }

  render() {
    const {translate} = this.props;
    const {recommendations, appointments, drugs, meals, physical_efforts, measurements, summary} = this.state;
    const events = [...recommendations, ...appointments, ...drugs, ...meals, ...physical_efforts, ...measurements];

    return (
      <div>
        <Card className={this.props.classes.calendar}>
          <CardContent>
            {PermissionHelper.isAdmin() && <div>
              <div style={{marginBottom: '20px'}}>
                <FormControl required>
                  <Select value={this.state.userId} displayEmpty onChange={this.handleChangeUser}>
                    <MenuItem key="empty" value="">{translate('views.calendar.inputs.user.empty')}</MenuItem>
                    {this.state.users.map(user => <MenuItem key={user.id}
                                                            value={`/api/users/${user.id}`}>{user.fullname}</MenuItem>)}
                  </Select>
                </FormControl>
              </div>

              <Divider style={{marginBottom: '20px'}}/>
            </div>}

            <FullCalendar
              header={{
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay',
              }}
              buttonText={{
                today: 'dzisiaj',
                month: 'miesiąc',
                week: 'tydzień',
                day: 'dzień',
                list: 'lista',
              }}
              defaultView="dayGridMonth"
              plugins={[ dayGridPlugin, interactionPlugin ]}
              locale="pl"
              defaultDate={new Date()}
              events={events}
              timeFormat="H:mm"
              eventClick={this.handleEventClicked.bind(this)}
              datesRender={this.handleViewRender.bind(this)}
            />
          </CardContent>
        </Card>

        <Summary starts={summary.starts} ends={summary.ends} user={summary.user}/>

        <Modal open={this.state.activeNotification} onClose={() => this.setState({activeNotification: undefined})}>
          <div className={this.props.classes.paper}>
            <Notification onConfirmClick={() => {
              this.setState({activeNotification: undefined});
            }} onDeclineClick={() => {
              this.setState({activeNotification: undefined});
            }} notification={this.state.activeNotification}/>
          </div>
        </Modal>
      </div>
    );
  }
}

const enhance = compose(
  withStyles(styles),
  translate
);

export default enhance(Calendar);
