import React from 'react';
import {Route} from 'react-router-dom';
import Diagrams from './../views/Diagrams';
import Calendar from './../views/Calendar';
import Chat from '../views/Chat';
import ChatList from '../views/ChatList';

export default [
  <Route exact path="/diagrams" component={Diagrams}/>,
  <Route exact path="/calendar" component={Calendar}/>,
  <Route exact path="/chats" component={ChatList}/>,
  <Route exact path="/chat/:userId" render={(routeProps) => <Chat userId={routeProps.match.params.userId} />}/>
];
