import React from 'react';
import {DashboardMenuItem, MenuItemLink, Responsive} from 'react-admin';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles, createStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { getResources, translate } from 'ra-core';
import DefaultIcon from '@material-ui/icons/ViewList';
import {Tune} from '@material-ui/icons';

const styles = createStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});

const Menu = ({
                classes,
                className,
                dense,
                hasDashboard,
                onMenuClick,
                open,
                pathname,
                resources,
                translate,
                logout,
                ...rest
              }) => (
  <div className={classnames(classes.main, className)} {...rest}>
    {hasDashboard && <DashboardMenuItem onClick={onMenuClick} />}

    <MenuItemLink
      key="diagrams"
      to={`/diagrams`}
      primaryText={translate('menu.diagrams.name')}
      leftIcon={<Tune/>}
      onClick={onMenuClick}
    />

    <MenuItemLink
      key="calendar"
      to={`/calendar`}
      primaryText={translate('menu.calendar.name')}
      leftIcon={<Tune/>}
      onClick={onMenuClick}
    />

    <MenuItemLink
      key="chatList"
      to={`/chats`}
      primaryText={translate('menu.chats.name')}
      leftIcon={<Tune/>}
      onClick={onMenuClick}
    />

    {resources
      .filter(r => r.hasList)
      .filter(r => {
        if (r.options && r.options.hide && r.options.hide === true) {
          return false;
        }

        return true;
      })
      .map(resource => (
        <MenuItemLink
          key={resource.name}
          to={`/${resource.name}`}
          primaryText={translate(`resources.${resource.name}.menu`)}
          leftIcon={
            resource.icon ? <resource.icon /> : <DefaultIcon />
          }
          onClick={onMenuClick}
          dense={dense}
        />
      ))}
    <Responsive xsmall={logout} medium={null} />
  </div>
);

Menu.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  dense: PropTypes.bool,
  hasDashboard: PropTypes.bool,
  logout: PropTypes.element,
  onMenuClick: PropTypes.func,
  open: PropTypes.bool,
  pathname: PropTypes.string,
  resources: PropTypes.array.isRequired,
  translate: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  onMenuClick: () => null,
};

const mapStateToProps = state => ({
  open: state.admin.ui.sidebarOpen,
  resources: getResources(state),
  pathname: state.router.location.pathname, // used to force redraw on navigation
});

const enhance = compose(
  translate,
  connect(
    mapStateToProps,
    {}, // Avoid connect passing dispatch in props,
    null,
    {
      areStatePropsEqual: (prev, next) =>
        prev.resources.every(
          (value, index) => value === next.resources[index] // shallow compare resources
        ) &&
        prev.pathname === next.pathname &&
        prev.open === next.open,
    }
  ),
  withStyles(styles)
);

export default enhance(Menu);
