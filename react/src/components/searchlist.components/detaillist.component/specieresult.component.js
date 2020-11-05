import React, { Component} from "react";
import styles from '../../../public/css/results.module.css';
import Peoples from "./peoples.component";
import Films from "./rescontentfilm.component";

export default class specieresult extends Component {
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
            <div>
                <h1>{this.props.content.name}</h1>
                <div className={styles.details}>
                    <p>classification : {this.props.content.classification}</p>
                    <p>designation : {this.props.content.designation}</p>
                    <p>average height : {this.props.content.average_height}</p>
                    <p>skin colors : {this.props.content.skin_colors}</p>
                    <p>hair colors : {this.props.content.hair_colors}</p>
                    <p>eye colors : {this.props.content.eye_colors}</p>
                    <p>averag lifespan : {this.props.content.average_lifespan}</p>
                    <p>language : {this.props.content.language}</p>
                </div>
                <div className={styles.appearances}>
                    <div className={styles.appearanceschild}>
                        <p className={styles.appearancestitle}>Appears in those films :</p>
                        {this.listFilmsAppeared()}
                    </div>
                    <Peoples onclickdetails={this.props.onclickdetails} content={this.props.content} />
                </div>
            </div>
        )
    }
}