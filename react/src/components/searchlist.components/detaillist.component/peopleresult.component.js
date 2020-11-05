import React, { Component} from "react";
import styles from '../../../public/css/results.module.css';
import Species from "./species.component";
import Starships from "./starships.component";
import Vehicules from "./vehicules.component";
import Films from "./rescontentfilm.component";

export default class peopleresult extends Component {
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
                    <p>height : {this.props.content.height}</p>
                    <p>mass : {this.props.content.mass}</p>
                    <p>hair color : {this.props.content.hair_color}</p>
                    <p>skin color : {this.props.content.skin_color}</p>
                    <p>eye color : {this.props.content.eye_color}</p>
                    <p>birth year : {this.props.content.birth_year}</p>
                    <p>gender : {this.props.content.gender}</p>
                </div>
                <div className={styles.appearances}>
                    <Species onclickdetails={this.props.onclickdetails} content={this.props.content} />
                    <Vehicules onclickdetails={this.props.onclickdetails} content={this.props.content} />
                    <Starships onclickdetails={this.props.onclickdetails} content={this.props.content} />
                    <div className={styles.appearanceschild}>
                        <p className={styles.appearancestitle}>Appears in those films :</p>
                        {this.listFilmsAppeared()}
                    </div>
                </div>
            </div>
        )
    }
}