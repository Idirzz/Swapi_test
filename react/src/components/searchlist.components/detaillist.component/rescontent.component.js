import React, { Component} from "react";
import styles from '../../../public/css/results.module.css';
const axios = require("axios");

export default class rescontent extends Component {
    _isMounted = false;

    constructor(props){
        super(props);

        this.state = {
            status : false,
            name : null,
            url : null,
        }
    }

    componentDidMount(){
        this._isMounted = true;
        axios.get(this.props.content)
            .then(result => {
                if (result && result.data && this._isMounted)
                    this.setState({url : result.data.url, status: true, name : result.data.name })
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        if(this.state.status)
            return (
                <div>
                    <p className={styles.childappear} onClick={() => this.props.onclickdetails(this.state.url)}> {this.state.name}</p>
                </div>
            )
        else
            return (
                <div>
                    loading..
                </div>
            )
                
    }
}