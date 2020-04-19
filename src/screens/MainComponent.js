import React from 'react';
import MyNavbar from "./components/MyNavbar"
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom"
import Home from "./HomeComponent"
import Program from './Program';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Info from './Infos';
import Pay from './Pay';

class Main extends React.Component {

    render() {
        return (
            <>{
                this.props.auth.isAuthenticated === true ?
                    <>
                        <MyNavbar />
                        <Switch>
                            <Route exact path="/" component={() => <Home />} />
                            <Route exact path="/program" component={() => <Program />} />
                            <Route exact path="/info" component={Info}/>
                            <Route exact path="/pay/:id" component={Pay}/>
                            <Redirect to='/'/>
                        </Switch>
                    </>
                    :
                    <Redirect to="/login" />
            }
            </>
        )
    }
}

Main.propTypes = {
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Main);
