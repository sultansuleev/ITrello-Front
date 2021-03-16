import React, { useState, useEffect, useContext} from 'react';
import {useCookies} from 'react-cookie';
import UserContext from "./UserContext";
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams, useHistory
} from "react-router-dom";
import CardService from "../../service/spring-service";


const Login = ({authUsr}) => {

    const [cookieJWT, setCookieJWT, removeCookieJWT] = useCookies(['jwt']);

    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordChange = event =>{
        setPassword(event.target.value);
    }

    const handleSubmit = event =>{
        event.preventDefault();
        const inputData = {email, password};
        CardService.login(inputData)
            .then(async res=>{
                console.log("Pered PUSH");
                await history.push("/profile");
                console.log("Posle PUSH");
                window.location.reload();
            }).catch(error => {alert("Oshibka")});

    }

    return (
        <div className = "container">
            <div className = "row mt-3">
                <div className = "col-lg-15 mx-auto">
                    <form onSubmit = {handleSubmit}>
                        <div className = "form-group">
                            <label>
                                Email : 
                            </label>
                            <input type = "email" className = "form-control" value = {email} onChange = {handleEmailChange}/>
                        </div>
                        <div className = "form-group">
                            <label>
                                Password : 
                            </label>
                            <input type = "password" className = "form-control" value = {password} onChange = {handlePasswordChange}/>
                        </div>
                        <div className = "form-group">
                            <button className = "btn btn-success" >SIGN IN</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;