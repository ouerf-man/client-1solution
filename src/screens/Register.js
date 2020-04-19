import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./shared/form.css"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
class Register extends Component {
    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/home");
        }
      }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        console.log(newUser);
        this.props.registerUser(newUser, this.props.history); 
    };
    render() {
        const { errors } = this.state;
        return (
            <div class="container">
                <div class="col-md-6 mx-auto text-center">
                    <div class="header-title">
                        <h1 class="wv-heading--title">
                            انشاء حساب
                  </h1>
                    
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 mx-auto">
                        <div class="myform form ">
                        <form noValidate onSubmit={this.onSubmit}>
                                <div class="form-group">
                                    <input name="name"
                                        className={classnames("form-control my-input", {
                                            invalid: errors.name
                                          })} placeholder="Name"
                                        onChange={this.onChange}
                                        value={this.state.name}
                                        error={errors.name}
                                        id="name"
                                        type="text"
                                    />
                                    <span className="red-text">{errors.name}</span>
                                </div>
                                <div class="form-group">
                                    <input name="name"
                                       className={classnames("form-control my-input", {
                                        invalid: errors.email
                                      })}
                                       placeholder="email"
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        error={errors.email}
                                        id="email"
                                        type="text"
                                    />
                                    <span className="red-text">{errors.email}</span>
                                </div>
                                <div class="form-group">
                                    <input
                                        onChange={this.onChange}
                                        className={classnames("form-control my-input", {
                                            invalid: errors.password
                                          })}placeholder="email"
                                        placeholder={"password"}
                                        value={this.state.password}
                                        error={errors.password}
                                        id="password"
                                        type="password"
                                    />
                                    <span className="red-text">{errors.password}</span>
                                </div>
                                <div class="form-group">
                                    <input
                                        onChange={this.onChange}
                                        className={classnames("form-control my-input", {
                                            invalid: errors.password2
                                          })} placeholder="email"
                                        placeholder={"confirm password"}
                                        value={this.state.password2}
                                        error={errors.password2}
                                        id="password2"
                                        type="password"
                                    />
                                    <span className="red-text">{errors.password2}</span>
                                </div>
                                <div class="text-center ">
                                    <button type="submit" class=" btn btn-block send-button tx-tfm">Create Your Free Account</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

export default connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(Register));