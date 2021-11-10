import logo from './logo.svg';

import classes from './app.module.css';

import Login from "./containers/login";
import Dashboard from './containers/dashboard';
import Details from './containers/dashboard/details';
import CreateProduct from './containers/createProduct';
import Header from './components/header';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Header />
      <Switch>

        <Route path="/create" component={CreateProduct} />
        <Route path="/dashboard/:id" component={Details} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" exact component={Login} />

      </Switch>
    </Router>
  );
}

export default App;
