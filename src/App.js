import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import theme from './theme';
// import { GlobalStyles } from './GlobalStyles';
import './styles/global.css';

import store from './store/store';
import Routes from './configs/routes';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme.lightTheme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  </Provider>
);

export default App;
