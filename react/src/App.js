import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import Login from "./components/login.component";
import Search from "./components/search.component";

export default class App extends Component {
    redirect = () => {
        const userinfo = JSON.parse(localStorage.getItem('userinfos'));
        const location = window.location.pathname;
        if (userinfo && location !== "/search")
            return(<Redirect to="/search" />);
        else if (!userinfo && location !== "/login")
            return(<Redirect to="/login" />);
        else
            return ("");
    }

    render() {
        return (
            <Router>
                <div className="container">
                    {this.redirect()}
                    <Navbar />
                    <Route path="/login" exact component={Login} />
                    <Route path="/search" exact component={Search} />
                </div>
            </Router>
            );
        }
}
    