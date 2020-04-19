import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./shared/form.css"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";
class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }
    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/home");
        }
      }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/home"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData);
        console.log(userData);
    };
    render() {
        const { errors } = this.state;
        return (
            <div class="container">
                
                <div class="row">
                    <div class="col-md-4 mx-auto">
                        <div class="myform form ">
                            <form noValidate onSubmit={this.onSubmit}>
                                <div class="form-group">
                                    <input name="name"
                                        placeholder="email"
                                        className={classnames("form-control my-input", {
                                            invalid: errors.email || errors.emailnotfound
                                        })}
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        error={errors.email}
                                        id="email"
                                        type="text"
                                    />
                                    <span className="red-text">
                                        {errors.email}
                                        {errors.emailnotfound}
                                    </span>
                                </div>
                                <div class="form-group">
                                    <input
                                        onChange={this.onChange}
                                        className={classnames("form-control my-input", {
                                            invalid: errors.password || errors.passwordincorrect
                                        })}
                                        placeholder="email"
                                        placeholder={"password"}
                                        value={this.state.password}
                                        error={errors.password}
                                        id="password"
                                        type="password"
                                    />
                                    <span className="red-text">
                                        {errors.password}
                                        {errors.passwordincorrect}
                                    </span>
                                </div>
                                <div class="text-center ">
                                    <button type="submit" class=" btn btn-block send-button tx-tfm">Login</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(Login);