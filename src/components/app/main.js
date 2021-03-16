import React, {useContext} from 'react';
import './app.css';
import {BrowserRouter as Router, Route, Switch, useHistory, withRouter} from 'react-router-dom';
import {useCookies} from 'react-cookie';
import {CardsPage, CardDetailsPage, EditPage} from '../pages';
import Header from '../header';
import UserProvider from "../chingChong/UserProvider";
import UserContext from "../chingChong/UserContext";
import Login from "../chingChong/Login";
import Register from "../chingChong/Register";
import CardService from "../../service/spring-service";
import Profile from "../pages/profilePage";
import Home from "../pages/homePage";

const Main = () => {
    const [cookieJWT, setCookieJWT, removeCookieJWT] = useCookies(['jwt']);

    let history = useHistory();

    return (
        <Switch>
            <Route exact path="/all" component={CardsPage}/>
            <Route exact path = "/login" >
                <Login/>
            </Route>
            <Route exact path = "/register">
                <Register addUsr={(user)=>{
                    console.log(user);
                    CardService.register(user)
                        .then(res=>{if(res.status===200){
                            history.push("/login");
                        }});
                }}/>
            </Route>
            <Route exact path={'/'} component={Home}/>
            <Route exact path="/card/:id"
                   render={({match}) => {
                       const {id} = match.params;
                       return <CardDetailsPage id={id}/>
                   }}
            />
            <Route exact path={'/profile'} render={() => <Profile/>}/>
            <Route exact path="/edit/:id"
                   render={({match}) => {
                       const {id} = match.params;
                       return <EditPage id={id}/>
                   }}
            />
        </Switch>
    );
};
export default withRouter(Main);