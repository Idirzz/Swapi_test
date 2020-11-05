import React, { Component} from "react";
import styles from '../../public/css/results.module.css';
import Species from "./detaillist.component/species.component";
import Starships from "./detaillist.component/starships.component";
import Vehicules from "./detaillist.component/vehicules.component";
import Films from "./detaillist.component/rescontentfilm.component";
const axios = require("axios");

export default class peoplelist extends Component {
    constructor(props){
        super(props);

        this.displayhomeworld();
        this.state = {
            homeworld : "Loading..",
        }
    }

    displayhomeworld = () => {
        axios.post("http://localhost:3001/search/homeworld", {url : this.props.content.homeworld})
        .then(result => {
            if (result && result.data)
                this.setState({homeworld : result.data.data.name})
        })
        .catch(err => {
            console.log(err)
        })
    }

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
                    <p className={styles.detailchild}>height : {this.props.content.height}</p>
                    <p className={styles.detailchild}>mass : {this.props.content.mass}</p>
                    <p className={styles.detailchild}>hair color : {this.props.content.hair_color}</p>
                    <p className={styles.detailchild}>skin color : {this.props.content.skin_color}</p>
                    <p className={styles.detailchild}>eye color : {this.props.content.eye_color}</p>
                    <p className={styles.detailchild}>birth year : {this.props.content.birth_year}</p>
                    <p className={styles.detailchild}>gender : {this.props.content.gender}</p>
                    <p className={styles.detailchild}>home world : {this.state.homeworld}</p>
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