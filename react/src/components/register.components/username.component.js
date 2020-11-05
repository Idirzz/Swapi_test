import React, { Component} from "react";
import styles from '../../public/css/login.module.css';

export default class firstname extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : "",
            usernameStyle : "field",
        }
    }
    onChangeUsername = (e) => {
        let string = e.target.value;
        if (string.length <= 50)
        {
            if (string != null && string.length > 1)
            {
                this.props.onChange({username : { value : string, status : true}})
                return this.setState({username : string, usernameStyle : "field"})
            }
            else
            {
                this.props.onChange({username : { value : string, status : false}})
                return this.setState({username : string, usernameStyle : "field error"})
            }
        }
    }

    componentDidMount = () => {
        if (this.props.default)
            this.setState({ username : this.props.default })
    }

    render() {
        return (
                <div className={this.state.usernameStyle}>
                    <label className={styles.usernamelabel}>Username</label>
                    <input autoComplete="username" value={this.state.username} onChange={this.onChangeUsername} placeholder="chewbacca" type="text" />
                </div>
        )
    }
}