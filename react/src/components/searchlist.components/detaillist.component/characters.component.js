import React, { Component} from "react";
import styles from '../../../public/css/results.module.css';
import Character from "./rescontent.component";

export default class characters extends Component {
    constructor(props){
        super(props);

        this.state = {
            status : false,
            name : null,
        }
    }

    listcharacters() {
        let index = 0;
        if (this.props.content.characters)
            return this.props.content.characters.map(character => {
                return <Character onclickdetails={this.props.onclickdetails} content={character} id={index} key={index++}/>
            });
        else
            return ;
    }

    
    render() {
        if (this.props.content.characters && this.props.content.characters.length)
            return (
                <div>
                    <div className={styles.appearanceschild}>
                        <p className={styles.appearancestitle}>characters of this film :</p>
                        {this.listcharacters()}
                    </div>
                </div>
            )
        else
            return("")
    }
}