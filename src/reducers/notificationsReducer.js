import {NOTIFICATIONS_TOGGLE_DRAWER} from '../actions/notificationsActions';

const initial = {
  drawerOpen: false
};

export default (state = initial, {type}) => {
  if (type === NOTIFICATIONS_TOGGLE_DRAWER) {
    return {...state, ...{drawerOpen: !state.drawerOpen}};
  }

  return state;
}
