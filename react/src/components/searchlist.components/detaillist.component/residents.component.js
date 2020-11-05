import React, { Component} from "react";
import styles from '../../../public/css/results.module.css';
import Resident from "./rescontent.component";

export default class residents extends Component {
    listResident() {
        let index = 0;
        if (this.props.content.residents)
            return this.props.content.residents.map(resident => {
                return <Resident onclickdetails={this.props.onclickdetails} content={resident} id={index} key={index++}/>
            });
        else
            return ;
    }

    
    render() {
        if (this.props.content.residents && this.props.content.residents.length)
            return (
                <div>
                    <div className={styles.appearanceschild}>
                        <p className={styles.appearancestitle}>residents of this planet :</p>
                        {this.listResident()}
                    </div>
                </div>
            )
        else
            return("")
    }
}