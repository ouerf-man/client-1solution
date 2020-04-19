import React from 'react';
import './App.css';
import Main from './screens/MainComponent';
import Register from './screens/Register';
import {Route, Switch } from 'react-router-dom';
import {connect } from "react-redux";

import Login from './screens/Login';
import Program from './screens/Program';
import FirstView from './screens/FirstView';
import Home from './screens/HomeComponent';


class Landing extends React.Component {

  render() {
    return (
      <>{
        this.props.auth.isAuthenticated === true ?
          <Main />
          :
          <>
          <FirstView/>
            <Switch>
              <Route exact path="/" component={() => <Home/>} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/program" component={Program}/>
            </Switch>
          </>
      }

      </>
    )
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});


export default connect(mapStateToProps)(Landing)