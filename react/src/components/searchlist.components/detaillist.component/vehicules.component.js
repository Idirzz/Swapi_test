import React, { Component} from "react";
import styles from '../../../public/css/results.module.css';
import Vehicule from "./rescontent.component";

export default class vehicles extends Component {

    listVehicule() {
        let index = 0;
        if (this.props.content.vehicles)
            return this.props.content.vehicles.map(vehicule => {
                return <Vehicule onclickdetails={this.props.onclickdetails} content={vehicule} id={index} key={index++}/>
            });
        else
            return ;
    }

    
    render() {
        if (this.props.content.vehicles && this.props.content.vehicles.length)
            return (
                <div>
                    <div className={styles.appearanceschild}>
                        <p className={styles.appearancestitle}>Used those vehicles : </p>
                        {this.listVehicule()}
                    </div>
                </div>
            )
        else
            return("")
    }
}