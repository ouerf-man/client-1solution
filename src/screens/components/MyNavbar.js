import React, { useState } from "react"
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import {NavLink} from "react-router-dom";
import { connect } from "react-redux";
import {logoutUser} from "../../actions/authActions"
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
function MyNavbar(props){
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
                                <NavLink className="nav-link" to='/info'>كيفية المشاركة</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/program'>البرنامج</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            
            <div style={styles.user}>
                <button className="btn btn-light" style={{marginRight:20}} onClick={()=>{props.logoutUser()}}>
                    <span className="fa fa-sign-out"></span>
                    خروج
                </button>
                    <span style={styles.username}>{props.auth.user.name}</span>  مرحبا 
            </div>    
            
        </Nav>
    )
}

export default connect(mapStateToProps,{logoutUser})(MyNavbar)


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