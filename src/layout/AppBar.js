import React, { Children, cloneElement } from 'react';
import {LoadingIndicator, UserMenu, Headroom} from 'react-admin';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles, createStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import { toggleSidebar as toggleSidebarAction } from 'ra-core';

const styles = theme =>
  createStyles({
    toolbar: {
      paddingRight: 24,
    },
    menuButton: {
      marginLeft: '0.5em',
      marginRight: '0.5em',
    },
    menuButtonIconClosed: {
      transition: theme.transitions.create(['transform'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      transform: 'rotate(0deg)',
    },
    menuButtonIconOpen: {
      transition: theme.transitions.create(['transform'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      transform: 'rotate(180deg)',
    },
    title: {
      flex: 1,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
    notificationIndicator: {
      color: theme.palette.secondary.contrastText,
    },
  });

const AppBar = ({
                  children,
                  classes,
                  className,
                  logo,
                  logout,
                  notificationIndicator,
                  open,
                  title,
                  toggleSidebar,
                  userMenu,
                  width,
                  ...rest
                }) => (
  <Headroom>
    <MuiAppBar
      className={className}
      color="secondary"
      position="static"
      {...rest}
    >
      <Toolbar
        disableGutters
        variant={width === 'xs' ? 'regular' : 'dense'}
        className={classes.toolbar}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleSidebar}
          className={classNames(classes.menuButton)}
        >
          <MenuIcon
            classes={{
              root: open
                ? classes.menuButtonIconOpen
                : classes.menuButtonIconClosed,
            }}
          />
        </IconButton>
        {Children.count(children) === 0 ? (
          <Typography
            variant="title"
            color="inherit"
            className={classes.title}
            id="react-admin-title"
          />
        ) : (
          children
        )}
        <LoadingIndicator />
        {notificationIndicator && cloneElement(notificationIndicator, {
          className: classes.notificationIndicator
        })}
        {cloneElement(userMenu, { logout })}
      </Toolbar>
    </MuiAppBar>
  </Headroom>
);

AppBar.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  logout: PropTypes.element,
  notificationIndicator: PropTypes.element,
  open: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  userMenu: PropTypes.node,
  width: PropTypes.string,
};

AppBar.defaultProps = {
  userMenu: <UserMenu />,
};

const enhance = compose(
  connect(
    state => ({
      locale: state.i18n.locale, // force redraw on locale change
    }),
    {
      toggleSidebar: toggleSidebarAction,
    }
  ),
  withStyles(styles),
  withWidth()
);

export default enhance(AppBar);
