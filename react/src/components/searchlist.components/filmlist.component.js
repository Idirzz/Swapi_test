import React, { Component} from "react";
import styles from '../../public/css/results.module.css';
import Species from "./detaillist.component/species.component";
import Starships from "./detaillist.component/starships.component";
import Vehicules from "./detaillist.component/vehicules.component";
import Characters from "./detaillist.component/characters.component";
import Planets from "./detaillist.component/planets.component";

export default class card extends Component {
    render() {
        return (
            <div className={styles.result}>
                <h1>{this.props.content.title}</h1>
                <div className={styles.details}>
                    <p>opening crawl : {this.props.content.opening_crawl}</p>
                    <p>director : {this.props.content.director}</p>
                    <p>producer : {this.props.content.producer}</p>
                    <p>release date : {this.props.content.release_date}</p>
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