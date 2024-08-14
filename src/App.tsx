import * as React from 'react';

import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { darkTheme, lightTheme } from './assets/jss/theme';
import LoadingPage from './views/components/LoadingPage';
import Todo from './views/Todo';
import packageJson from '../package.json';
import Layout from './layout/layout';

const history = createBrowserHistory({ basename: '.' });

const App = () => {
  React.useEffect(() => {
    console.log('Current Version ', packageJson.version);
  }, []);
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  return (
    <MuiThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <React.Suspense fallback={<LoadingPage />}>
        <Router history={history}>
          <Layout setTheme={setTheme}>
            <Switch>
              <Route path="/">
                <Todo />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </React.Suspense>
    </MuiThemeProvider>
  );
};

export default App;
