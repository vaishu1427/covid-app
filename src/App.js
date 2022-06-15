import React, {Component} from "react";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Home from "./pages/home";
import Login from './pages/login';
import Signup from './pages/signup';
import AddVaccin from "./pages/AddVaccin";
import { AuthProvider } from "./pages/components/Auth";


class App extends Component {
  render() {
    return (
      <AuthProvider>
      <Router>
        <Route exact path="/">
          <Redirect to="/Login"/>
        </Route>
        <Route exact path="/Login">
          <Login/>
        </Route>
        <Route exact path="/Signup">
          <Signup/>
        </Route>
        <Route exact path="/Home">
          <Home/>
        </Route>
        <Route exact path="/AddVaccin">
          <AddVaccin/>
        </Route>
      </Router>
      </AuthProvider>
   );
  }
}

export default App;
