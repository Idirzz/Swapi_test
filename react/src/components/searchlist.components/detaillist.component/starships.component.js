import React, { Component} from "react";
import styles from '../../../public/css/results.module.css';
import Starship from "./rescontent.component";

export default class starships extends Component {

    listStarships() {
        let index = 0;
        if (this.props.content.starships)
            return this.props.content.starships.map(starship => {
                return <Starship onclickdetails={this.props.onclickdetails} content={starship} id={index} key={index++}/>
            });
        else
            return ;
    }

    
    render() {
        if (this.props.content.starships && this.props.content.starships.length)
            return (
                <div>
                    <div className={styles.appearanceschild}>
                        <p className={styles.appearancestitle}>Used those starships :</p>
                        {this.listStarships()}
                    </div>
                </div>
            )
        else
            return("")
    }
}