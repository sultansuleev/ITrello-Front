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
    useParams, withRouter
} from "react-router-dom";

const Register = ({addUsr}) =>{

    const [cookieJWT, setCookieJWT, removeCookieJWT] = useCookies(['jwt']);

    const user = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = event =>{
        setEmail(event.target.value);
    }

    const handleNameChange = event =>{
        setName(event.target.value);
    }

    const handlePasswordChange = event =>{
        setPassword(event.target.value);
    }

    const handleSubmit = event =>{
        const inputData = {email, fullName: name, password};
        auth(inputData);
        event.preventDefault();
    }

    async function auth(data){
        addUsr(data);
    }

    return (
        <div className = "container">
            <div className = "row mt-3">
                <div className = "col-6 mx-auto">
                    <form onSubmit = {handleSubmit}>
                        <div className = "form-group">
                            <label>
                                Email : 
                            </label>
                            <input type = "email" className = "form-control" value = {email} onChange = {handleEmailChange}/>
                        </div>
                        <div className = "form-group">
                            <label>
                                Name :
                            </label>
                            <input type = "text" className = "form-control" value = {name} onChange = {handleNameChange}/>
                        </div>
                        <div className = "form-group">
                            <label>
                                Password : 
                            </label>
                            <input type = "password" className = "form-control" value = {password} onChange = {handlePasswordChange}/>
                        </div>
                        <div className = "form-group">
                            <button className = "btn btn-success" >SIGN UP</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default (Register);