import React, { useState } from "react"
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import {NavLink, Link} from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
function FirstView(props){
    const [isNavOpen,toggleNav]= useState(false);
    return(
        <Nav className="flex-row-reverse justify-content-between">
            <Navbar light expand="md">
                    <div className="container flex-md-row-reverse">
                        <NavbarToggler onClick={()=> toggleNav(!isNavOpen)} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="90" alt='logo' /></NavbarBrand>
                        <Collapse isOpen={isNavOpen} navbar >
                            <Nav navbar className="flex-md-row-reverse">
                            <NavItem>
                                <NavLink className="nav-link"  to='/'>الصفحة الرئيسبة</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/program'>البرنامج</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            
            <div style={styles.user}>
                <Link to="/login">
                <button className="btn btn-light" style={{marginRight:20}}>
                    <span className="fa fa-sign-in"></span>
                    تسجيل الدخول
                </button>
                </Link>
                <Link to="/register">
                <button className="btn btn-light" style={{marginRight:20}}>
                    <span className="fa fa-user-plus"></span>
                    انشاء حساب 
                </button>
                </Link>
            </div>    
            
        </Nav>
    )
}

export default connect(mapStateToProps)(FirstView)


const styles = {
    navLinks:{
        fontSize: 16
    },
    user:{
        display:'flex',
        justifyContect:"center",
        alignItems:'center',
        paddingLeft:"20px"
    },
    username:{
        marginRight:10,
        fontSize:20
    }   
}