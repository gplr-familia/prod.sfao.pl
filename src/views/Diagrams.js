import React, {Component} from 'react';
import {GET_LIST, translate} from 'react-admin';
import restClient from '../providers/rest';
import Diagram from './diagrams/Diagram';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import moment from 'moment';
import TextField from '@material-ui/core/TextField';
import {compose} from 'recompose';
import PermissionHelper from '../helpers/PermissionHelper';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import axios from '../providers/axios';

class Diagrams extends Component {
  constructor(props) {
    super(props);

    this.style = props.style;
    this.state = {
      measurement_types: [],
      users: [],
      userId: undefined,
      from: moment().subtract(7, 'days').format('YYYY-MM-DD'),
      to: moment().format('YYYY-MM-DD')
    };

    this.handleDateFromChange = this.handleDateFromChange.bind(this);
    this.handleDateToChange = this.handleDateToChange.bind(this);
    this.handleChangeUser = this.handleChangeUser.bind(this);
  }

  componentDidMount() {
    const parent = this;
    const params = {pagination: {page: 1, perPage: 1000}, sort: {field: 'id', order: 'asc'}};

    restClient(GET_LIST, 'measurement_types', params).then(function (data) {
      parent.setState({measurement_types: data.data});
    });

    if (PermissionHelper.isAdmin()) {
      this.fetchUsers();
    }
  }

  handleDateFromChange({target: {value}}) {
    this.setState({from: value});
  }

  handleDateToChange({target: {value}}) {
    this.setState({to: value});
  }

  handleChangeUser({target: {value}}) {
    this.setState({userId: value});
  }

  fetchUsers() {
    axios().get('users', this.state.params).then(({data}) => this.setState({users: data}));
  }

  render() {
    const {translate} = this.props;
    return (
      <div style={this.style}>
        <Card style={{marginBottom: '24px'}}>
          <CardContent>
            {PermissionHelper.isAdmin() && <div>
              <div style={{marginBottom: '20px'}}>
                <FormControl required>
                  <Select value={this.state.userId} displayEmpty onChange={this.handleChangeUser}>
                    <MenuItem key="empty" value="">{translate('views.diagrams.inputs.userEmpty')}</MenuItem>
                    {this.state.users.map(user => <MenuItem key={user.id}
                                                            value={`/api/users/${user.id}`}>{user.fullname}</MenuItem>)}
                  </Select>
                </FormControl>
              </div>

              <Divider style={{marginBottom: '20px'}}/>
            </div>}
            <TextField style={{marginRight: '24px'}} onChange={this.handleDateFromChange}
                       label={translate('views.diagrams.inputs.from')} type="date" value={this.state.from}/>
            <TextField onChange={this.handleDateToChange} label={translate('views.diagrams.inputs.to')} type="date"
                       value={this.state.to}/>
          </CardContent>
        </Card>
        {(!PermissionHelper.isAdmin() || (PermissionHelper.isAdmin() && this.state.userId)) && this.state.measurement_types.map(measurement_type =>
          <Diagram
            {...measurement_type}
            key={measurement_type.id}
            userId={this.state.userId}
            from={this.state.from}
            to={this.state.to}/>)}
      </div>
    );
  }
}

const enhance = compose(
  translate
);

export default enhance(Diagrams);
