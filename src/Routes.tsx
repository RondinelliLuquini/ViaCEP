import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import CEPSearch from 'pages/CEPSearch';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/cepsearch">
        <CEPSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
