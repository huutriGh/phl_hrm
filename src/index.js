import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import App from './App';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import * as serviceWorker from './serviceWorker';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import theme from './theme';
const browserHistory = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <App />
        </Router>
      </ThemeProvider>
    </PersistGate>
  </Provider>,

  document.getElementById('root')
);
serviceWorker.unregister();
