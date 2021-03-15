import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Nav, Navbar, NavDropdown, NavItem, Form, Button} from "react-bootstrap";

export default class Index extends Component {

    render() {
        return(
            <Navbar expand="lg"  className="navbar-dark nav-cust px-5 justify-content-around" >
                <Navbar.Brand className="font-weight-bold">ITrello</Navbar.Brand>
                <Nav className="navbar-nav ">
                    <NavItem>
                        <NavLink to="/" activeClassName="nav-link active" className="nav-link">
                            All Cards
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="/register"
                            activeClassName="nav-link active"
                            className="nav-link"
                        >
                            Register
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="/login"
                            activeClassName="nav-link active"
                            className="nav-link"
                        >
                            Login
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}
