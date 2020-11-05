import React, { Component} from "react";
import styles from '../../../public/css/results.module.css';
import Planet from "./rescontent.component";

export default class planets extends Component {
    constructor(props){
        super(props);

        this.state = {
            status : false,
            name : null,
        }
    }

    lisplanets() {
        let index = 0;
        if (this.props.content.planets)
            return this.props.content.planets.map(planet => {
                return <Planet onclickdetails={this.props.onclickdetails} content={planet} id={index} key={index++}/>
            });
        else
            return ;
    }

    
    render() {
        if (this.props.content.planets && this.props.content.planets.length)
            return (
                <div>
                    <div className={styles.appearanceschild}>
                        <p className={styles.appearancestitle}>planets appearing in this film :</p>
                        {this.lisplanets()}
                    </div>
                </div>
            )
        else
            return("")
    }
}