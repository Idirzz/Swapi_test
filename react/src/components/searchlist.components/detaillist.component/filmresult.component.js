import React, { Component} from "react";
import styles from '../../../public/css/results.module.css';
import Species from "./species.component";
import Starships from "./starships.component";
import Vehicules from "./vehicules.component";
import Characters from "./characters.component";
import Planets from "./planets.component";

export default class filmresult extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.content.title}</h1>
                <div className={styles.details}>
                    <p> Episode id : {this.props.content.episode_id}</p>
                    <p> Opening crawl : {this.props.content.opening_crawl}</p>
                    <p> Director : {this.props.content.director}</p>
                    <p> Producer : {this.props.content.producer}</p>
                    <p> Release date : {this.props.content.release_date}</p>
                </div>
                <div className={styles.appearances}>
                    <Planets onclickdetails={this.props.onclickdetails} content={this.props.content} />
                    <Species onclickdetails={this.props.onclickdetails} content={this.props.content} />
                    <Characters onclickdetails={this.props.onclickdetails} content={this.props.content} />
                    <Vehicules onclickdetails={this.props.onclickdetails} content={this.props.content} />
                    <Starships onclickdetails={this.props.onclickdetails} content={this.props.content} />
                </div>
            </div>
        )
    }
}