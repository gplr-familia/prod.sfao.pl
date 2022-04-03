import React, { Component, createElement } from 'react';
import {Sidebar, Notification, Error, defaultTheme} from 'react-admin';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { withRouter } from 'react-router';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
  createStyles,
} from '@material-ui/core/styles';
import compose from 'recompose/compose';

import AppBar from './AppBar';
import Menu from './Menu';
import NotificationsManager from '../components/notifications/NotificationsManager';
import NotificationIndicator from './NotificationIndicator';

const styles = theme =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1,
      minHeight: '100vh',
      backgroundColor: theme.palette.background.default,
      position: 'relative',
      minWidth: 'fit-content',
      width: '100%',
      height: '100%'
    },
    appFrame: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    },
    contentWithSidebar: {
      display: 'flex',
      flexGrow: 1,
      paddingTop: '48px'
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      flexBasis: 0,
      padding: theme.spacing.unit * 3,
      [theme.breakpoints.up('xs')]: {
        paddingLeft: 5,
      },
      [theme.breakpoints.down('sm')]: {
        padding: 0,
      },
    },
    footer: {
      background: '#fff',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    footerParagraph: {
      padding: '24px'
    },
    footerImage: {
      height: '100px'
    }
  });

const sanitizeRestProps = ({
                             staticContext,
                             history,
                             location,
                             match,
                             ...props
                           }) => props;

class Layout extends Component {
  state = { hasError: false, errorMessage: null, errorInfo: null };

  constructor(props) {
    super(props);
    /**
     * Reset the error state upon navigation
     *
     * @see https://stackoverflow.com/questions/48121750/browser-navigation-broken-by-use-of-react-error-boundaries
     */
    props.history.listen(() => {
      if (this.state.hasError) {
        this.setState({ hasError: false });
      }
    });
  }

  componentDidCatch(errorMessage, errorInfo) {
    this.setState({ hasError: true, errorMessage, errorInfo });
  }

  render() {
    const {
      appBar,
      children,
      classes,
      className,
      customRoutes,
      error,
      dashboard,
      logout,
      menu,
      notification,
      open,
      sidebar,
      title,
      ...props
    } = this.props;
    const { hasError, errorMessage, errorInfo } = this.state;
    return (
      <div
        className={classnames('layout', classes.root, className)}
        {...sanitizeRestProps(props)}
      >
        <div className={classes.appFrame}>
          {createElement(appBar, { title, open, logout, notificationIndicator: <NotificationIndicator /> })}
          <main className={classes.contentWithSidebar}>
            {createElement(sidebar, {
              children: createElement(menu, {
                logout,
                hasDashboard: !!dashboard,
              }),
            })}
            <div className={classes.content}>
              {hasError
                ? createElement(error, {
                  error: errorMessage,
                  errorInfo,
                  title,
                })
                : children}
            </div>
            <NotificationsManager />
          </main>
          <div className={classes.footer}>
            <p className={classes.footerParagraph}>
              Projekt pn. "Innowacja w świadczeniu usług medycznych związanych z terapią zaburzeń metabolizmu i leczenia otyłości" współfinansowany przez Unię Europejską z Europejskiego Funduszu Rozwoju Regionalnego w ramach Regionalnego Programu Operacyjnego Województwa Śląskiego na lata 2014 - 2020.
            </p>
            <img className={classes.footerImage} src="/loga.png" alt=""/>
          </div>
          {createElement(notification)}
        </div>
      </div>
    );
  }
}

const componentPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.string,
]);

Layout.propTypes = {
  appBar: componentPropType,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  classes: PropTypes.object,
  className: PropTypes.string,
  customRoutes: PropTypes.array,
  dashboard: componentPropType,
  error: componentPropType,
  history: PropTypes.object.isRequired,
  logout: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.string,
  ]),
  menu: componentPropType,
  notification: componentPropType,
  open: PropTypes.bool,
  sidebar: componentPropType,
  title: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  appBar: AppBar,
  error: Error,
  menu: Menu,
  notification: Notification,
  sidebar: Sidebar,
};

const mapStateToProps = state => ({
  open: state.admin.ui.sidebarOpen,
});

const EnhancedLayout = compose(
  connect(
    mapStateToProps,
    {} // Avoid connect passing dispatch in props
  ),
  withRouter,
  withStyles(styles)
)(Layout);

class LayoutWithTheme extends Component {
  constructor(props) {
    super(props);
    this.theme = createMuiTheme(props.theme);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.theme !== this.props.theme) {
      this.theme = createMuiTheme(nextProps.theme);
    }
  }
  render() {
    const { theme, ...rest } = this.props;
    return (
      <MuiThemeProvider theme={this.theme}>
        <EnhancedLayout {...rest} />
      </MuiThemeProvider>
    );
  }
}

LayoutWithTheme.propTypes = {
  theme: PropTypes.object,
};

LayoutWithTheme.defaultProps = {
  theme: defaultTheme,
};

export default LayoutWithTheme;
