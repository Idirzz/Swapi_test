import React, { Component} from "react";
import Username from "./register.components/username.component";
import Password from "./password.component";
import  { Redirect } from 'react-router-dom'
const axios = require("axios");

export default class login extends Component {
    constructor(){
        super();

        this.state = {
            username : { value : "", status : false},
            pwd : { value : "", status : false},
            buttondisabled : true,
            errorheader : "none",
            errordiv : "none",
            divstyle : "alert alert-danger mt-3",
            errorresend : "none",
            errormsg : "",
            redirect: false
        }
    }

    onChange = async (field) =>{
        await this.setState(field)
        this.setState({errordiv : "none"})
        if (this.state.username.status && this.state.pwd.status)
            this.setState({buttondisabled : false})
        else
            this.setState({buttondisabled : true,})
    }
    
    OnClickSubmit = () => {
        if (this.state.buttondisabled === false)
        {
            axios.post("http://localhost:3001/user/login", {
                    "username" : this.state.username.value,
                    "password" : this.state.pwd.value,
            })
            .then(result => {
                if (result && result.data)
                {
                    this.setState({ redirect: true })
                    localStorage.setItem('userinfos', JSON.stringify({connected:"Luke"}));
                    window.location.reload(false);
                }
                else
                    this.setState({ errorheader : "", errorresend : "none", errordiv: "", errormsg : "Wrong e-mail or/and password" })
            })
            .catch(err => {
                console.log("There was an error with login request " + err)
            })
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/search' />
        }
    }

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <div className="mt-4 ui form">
                    <Username onChange={this.onChange}/>
                    <Password onChange={this.onChange}/>
                </div>
                <div className={this.state.divstyle} style={{display : this.state.errordiv}}>
                    <h4 style={{display : this.state.errorheader}} className="alert-heading">{this.state.errormsg}</h4>
                    <p style={{display : this.state.errorresend}} className="mt-4 mb-1">Click <strong><em><span onClick={this.OnClickResend}>here</span></em></strong> if you want to resend your confirmation email !</p>
                </div>
                <input onClick={this.OnClickSubmit} className="btn btn-outline-dark mt-4"type="submit" disabled={this.state.buttondisabled} />
            </div>
        )
    }
}