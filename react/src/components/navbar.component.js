import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    constructor(props){
        super(props);

        this.state = {
            userinfos : JSON.parse(localStorage.getItem('userinfos')),
        }
    }

    OnClickLogout = () => {
        localStorage.removeItem('userinfos');
        window.location.reload(false);
    }



    render() {
        if (this.state.userinfos != null)
        {
            return (
                <div>
                    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                        <Link to="/login" onClick={this.OnClickLogout} className="navbar-brand ml-2">Logout</Link>
                    </nav>
                </div>
            );
        } 
        else
        {
            return (
                <div>            
                    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                        <Link to="/login" className="navbar-brand">Login</Link>
                    </nav>
                </div>
            );
        }
    }
}