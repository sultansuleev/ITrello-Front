import React, {useContext, useEffect, useState} from 'react';
import './app.css';
import {BrowserRouter as Router, Route, Switch, useHistory, withRouter} from 'react-router-dom';
import {Header} from '../header';
import UserProvider from "../chingChong/UserProvider";
import UserContext from "../chingChong/UserContext";
import Main from "./main";

const App = () => {

    const [user, setUser] = useState("");

    useEffect(() => {
        setUser(localStorage.getItem("token"));
    }, [])


    return (
        <UserProvider>
            <Router>
                <Header token={user} />
                <div className="container">
                    <Main/>
                </div>
            </Router>
        </UserProvider>
    );
};
export default (App);