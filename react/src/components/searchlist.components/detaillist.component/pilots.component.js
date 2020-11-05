import React, { Component} from "react";
import styles from '../../../public/css/results.module.css';
import Pilot from "./rescontent.component";

export default class pilots extends Component {
    constructor(props){
        super(props);

        this.state = {
            status : false,
            name : null,
        }
    }

    listPilots() {
        let index = 0;
        if (this.props.content.pilots)
            return this.props.content.pilots.map(pilot => {
                return <Pilot onclickdetails={this.props.onclickdetails} content={pilot} id={index} key={index++}/>
            });
        else
            return ;
    }

    
    render() {
        if (this.props.content.pilots && this.props.content.pilots.length)
            return (
                <div>
                    <div className={styles.appearanceschild}>
                        <p className={styles.appearancestitle}>Those characteres piloted this vehicle</p>
                        {this.listPilots()}
                    </div>
                </div>
            )
        else
            return("")
    }
}