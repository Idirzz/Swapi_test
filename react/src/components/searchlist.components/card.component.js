import React, { Component} from "react";
import styles from '../../public/css/results.module.css';
import Filmresult from "./detaillist.component/filmresult.component";
import Vehicleresult from "./detaillist.component/vehiculeresult.component";
import Starshipresult from "./detaillist.component/starshipresult.component";
import Peopleresult from "./detaillist.component/peopleresult.component";
import Planetresult from "./detaillist.component/planetresult.component";
import Specieresult from "./detaillist.component/specieresult.component";

export default class search extends Component {
    constructor(props){
        super();

        this.state = {
            type : null,
        }
    }

    componentDidMount = async () => {
        if (this.props.content.vehicle_class)
            this.setState({type : "vehicles"})
        else if (this.props.content.title)
            this.setState({type : "films"})
        else if (this.props.content.manufacturer && !this.props.content.vehicle_class)
            this.setState({type : "starships"})
        else if (this.props.content.height)
            this.setState({type : "people"})
        else if (this.props.content.rotation_period)
            this.setState({type : "planets"})
        else if (this.props.content.classification)
            this.setState({type : "species"})
    }

    onclickdetailscard = async (detailurl) => {
        let str = await detailurl.split("/")[4]
        await this.setState({type : str})
        this.props.onclickdetails(detailurl);
    }

    displaycard() {
        if (this.state.type === null)
            return ("Loading..");
        else if (this.state.type === "films")
            return <Filmresult onclickdetails={this.onclickdetailscard} content={this.props.content}/>
        else if (this.state.type === "vehicles")
            return <Vehicleresult onclickdetails={this.onclickdetailscard} content={this.props.content}/>
        else if (this.state.type === "people")
            return <Peopleresult style={{display : "none"}} onclickdetails={this.onclickdetailscard} content={this.props.content}/>
        else if (this.state.type === "starships")
            return <Starshipresult onclickdetails={this.onclickdetailscard} content={this.props.content}/>
        else if (this.state.type === "planets")
            return <Planetresult onclickdetails={this.onclickdetailscard} content={this.props.content}/>
        else if (this.state.type === "species")
            return <Specieresult onclickdetails={this.onclickdetailscard} content={this.props.content}/>
        else
            return ("Loading..");
    }

    render() {
        return (
            <div className={styles.result}>
                {this.displaycard()}
            </div>
                
        )
    }
}