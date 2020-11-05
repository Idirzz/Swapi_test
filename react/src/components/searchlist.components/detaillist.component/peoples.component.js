import React, { Component} from "react";
import styles from '../../../public/css/results.module.css';
import People from "./rescontent.component";

export default class peoples extends Component {
    listPeople() {
        let index = 0;
        if (this.props.content.people)
            return this.props.content.people.map(people => {
                return <People onclickdetails={this.props.onclickdetails} content={people} id={index} key={index++}/>
            });
        else
            return ;
    }

    
    render() {
        if (this.props.content.people && this.props.content.people.length)
            return (
                <div>
                    <div className={styles.appearanceschild}>
                        <p className={styles.appearancestitle}>Those characteres are a part of this species</p>
                        {this.listPeople()}
                    </div>
                </div>
            )
        else
            return("")
    }
}