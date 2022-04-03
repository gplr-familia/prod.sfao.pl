import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider, addLocaleData} from 'react-intl';
import pl from 'react-intl/locale-data/pl';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

addLocaleData([...pl]);

ReactDOM.render(
  <IntlProvider locale="pl">
    <App/>
  </IntlProvider>,
  document.getElementById('root')
);
registerServiceWorker();
