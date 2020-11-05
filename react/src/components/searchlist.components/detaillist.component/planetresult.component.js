import React, { Component} from "react";
import styles from '../../../public/css/results.module.css';
import Residents from "./residents.component";
import Films from "./rescontentfilm.component";

export default class filmresult extends Component {
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
                    <p>rotatio period : {this.props.content.rotation_period}</p>
                    <p>orbital period : {this.props.content.orbital_period}</p>
                    <p>diameter : {this.props.content.diameter}</p>
                    <p>climate : {this.props.content.climate}</p>
                    <p>gravity : {this.props.content.gravity}</p>
                    <p>terrain : {this.props.content.terrain}</p>
                    <p>surfac water : {this.props.content.surface_water}</p>
                    <p>population : {this.props.content.population}</p>
                </div>
                <div className={styles.appearances}>
                    <Residents onclickdetails={this.props.onclickdetails} content={this.props.content} />
                    <div className={styles.appearanceschild}>
                        <p className={styles.appearancestitle}>Appears in those films :</p>
                        {this.listFilmsAppeared()}
                    </div>
                </div>
            </div>
        )
    }
}