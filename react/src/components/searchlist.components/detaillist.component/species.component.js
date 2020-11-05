import React, { Component} from "react";
import styles from '../../../public/css/results.module.css';
import Specie from "./rescontent.component";

export default class species extends Component {
    listSpecies() {
        let index = 0;
        if (this.props.content.species)
            return this.props.content.species.map(specie => {
                return <Specie onclickdetails={this.props.onclickdetails} content={specie} id={index} key={index++}/>
            });
        else
            return ;
    }

    
    render() {
        if (this.props.content.species && this.props.content.species.length)
            return (
                <div>
                    <div className={styles.appearanceschild}>
                        <p className={styles.appearancestitle}>Part of this species :</p>
                        {this.listSpecies()}
                    </div>
                </div>
            )
        else
            return("")
    }
}