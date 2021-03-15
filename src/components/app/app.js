import React from 'react';
import './app.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {CardsPage, CardDetailsPage, EditPage} from '../pages';
import Header from '../header';

const App = () => {
    return (
        <Router>
            <Header/>
            <div className="container">
                <Route exact path="/" component={CardsPage}/>
                <Route exact path="/card/:id"
                       render={({match}) => {
                           const {id} = match.params;
                           return <CardDetailsPage id={id}/>
                       }}
                />
                <Route exact path="/edit/:id"
                       render={({match}) => {
                           const {id} = match.params;
                           return <EditPage id={id}/>
                       }}
                />

            </div>
        </Router>
    );
};
export default App;