import React, { Component} from "react";
import styles from '../../public/css/results.module.css';
import Pilots from "./detaillist.component/pilots.component";
import Films from "./detaillist.component/rescontentfilm.component";

export default class starshiplist extends Component {
    listFilmsAppeared() {
        let index = 0;
        if (this.props.content.films && this.props.content.films.length)
            return this.props.content.films.map(film => {
                return <Films onclickdetails={this.props.onclickdetails} content={film} id={index} key={index++}/>
            });
        else
            return ;
    }

    render() {
        return (
            <div className={styles.result}>
                <h1>{this.props.content.name}</h1>
                <div className={styles.details}>
                    <p>model : {this.props.content.model}</p>
                    <p>manufacturer : {this.props.content.manufacturer}</p>
                    <p>cost in credits : {this.props.content.cost_in_credits}</p>
                    <p>length : {this.props.content.length}</p>
                    <p>max atmosphering speed : {this.props.content.max_atmosphering_speed}</p>
                    <p>crew : {this.props.content.crew}</p>
                    <p>passengers : {this.props.content.passengers}</p>
                    <p>cargo capacity : {this.props.content.cargo_capacity}</p>
                </div>
                <div className={styles.appearances}>
                    <div className={styles.appearanceschild}>
                        <p className={styles.appearancestitle}>Appears in those films :</p>
                        {this.listFilmsAppeared()}
                    </div>
                    <Pilots onclickdetails={this.props.onclickdetails} content={this.props.content} />
                </div>
            </div>
        )
    }
}