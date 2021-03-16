import React, {Component} from 'react';
import {Link, NavLink, useHistory} from 'react-router-dom';
import {Nav, Navbar, NavDropdown, NavItem, Form, Button} from "react-bootstrap";
import {useCookies} from "react-cookie";
import CardService from "../../service/spring-service";

export const Header = (props) => {
    const [cookieJWT, setCookieJWT, removeCookieJWT] = useCookies(['jwt']);
    let history = useHistory();
    function logout() {
        CardService.logout();
        history.push("/");
        window.location.reload();
    }

    return (
        <Navbar expand="lg" className="navbar-dark nav-cust px-5 justify-content-around">
            <Navbar.Brand className="font-weight-bold">ITrello</Navbar.Brand>
            <Nav className="navbar-nav ">
                {props.token ?
                    <>
                        <NavItem>
                            <NavLink to="/all" activeClassName="nav-link active" className="nav-link">
                                All Cards
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/profile" activeClassName="nav-link active" className="nav-link">
                                Profile
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/login" activeClassName="nav-link active" className="nav-link" onClick={logout}>
                                Log out
                            </NavLink>
                        </NavItem>
                    </>
                    :
                    <>
                        <NavItem>
                            <NavLink to="/register" activeClassName="nav-link active" className="nav-link">
                                Register
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/login" activeClassName="nav-link active" className="nav-link">
                                Login
                            </NavLink>
                        </NavItem>
                    </>
                }

            </Nav>
        </Navbar>
    );
}
