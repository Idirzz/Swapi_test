import React, { Component} from "react";
import styles from '../public/css/search.module.css';
import resultstyles from '../public/css/results.module.css';
import Peoplelist from "./searchlist.components/peoplelist.component";
import Planetslist from "./searchlist.components/planetslist.component";
import Specieslist from "./searchlist.components/specieslist.component";
import Filmslist from "./searchlist.components/filmlist.component";
import Vehicleslist from "./searchlist.components/vehiclelist.component";
import Starshiplist from "./searchlist.components/starshiplist.component";
import Card from "./searchlist.components/card.component";
const axios = require("axios");

export default class search extends Component {
    constructor(props){
        super();

        this.noResult = this.noResult.bind(this);
        this.state = {
            detailurl : null,
            search : "",
            type : "people",
            searchresult : null,
            searchstatus : null,
            nextpage : "none",
            precpage : "none",
        }
    }

    onChangeType  = (e) => {
        let string = e.target.value;
        if (string === "people" || string === "planets" || string === "films" || string === "species" || string === "vehicles" || string === "starships")
            this.setState({detailurl : null, searchresult : null, searchstatus : false, type : string, nextpage : "none", precpage : "none"})
    }

    onChangeSearch = (e) => {
        let string = e.target.value;
        if (string.length <= 30)
            this.setState({detailurl : null, searchresult : null, searchstatus : false, search : string, nextpage : "none", precpage : "none"})
    }

    OnClickSubmit = () => {
        axios.post("http://localhost:3001/search", {data : this.state})
        .then(result => {
            if (result && result.data && result.data.data)
            {
                    this.setState({detailurl : null, searchstatus : true, searchresult : result.data})
                if (result.data.data.next)
                    this.setState({nextpage : "block"})
                if (result.data.data.previous)
                   this.setState({precpage : "block"})
            }
        })
        .catch(err => {
            this.setState({searchstatus : "error"})
        })
    }

    searchResults() {
        let index = 0;
        if (this.state.searchstatus === false)
            return ;
        else if (this.state.search === "" && this.state.type === "people" && this.state.searchresult && this.state.searchresult.data && this.state.searchresult.data.results && !this.state.detailurl)
            return this.state.searchresult.data.results.map(res => {
                return <Peoplelist onclickdetails={this.onclickdetails} content={res} key={index++}/>
            });
        else if (this.state.search === "" && this.state.type === "planets" && this.state.searchresult && this.state.searchresult.data && this.state.searchresult.data.results && !this.state.detailurl)
            return this.state.searchresult.data.results.map(res => {
                return <Planetslist onclickdetails={this.onclickdetails} content={res} key={index++}/>
            });
        else if (this.state.search === "" && this.state.type === "films" && this.state.searchresult && this.state.searchresult.data && this.state.searchresult.data.results && !this.state.detailurl)
            return this.state.searchresult.data.results.map(res => {
                return <Filmslist onclickdetails={this.onclickdetails} content={res} key={index++}/>
            });
        else if (this.state.search === "" && this.state.type === "species" && this.state.searchresult && this.state.searchresult.data && this.state.searchresult.data.results && !this.state.detailurl)
            return this.state.searchresult.data.results.map(res => {
                return <Specieslist onclickdetails={this.onclickdetails} content={res} key={index++}/>
            });
        else if (this.state.search === "" && this.state.type === "vehicles" && this.state.searchresult && this.state.searchresult.data && this.state.searchresult.data.results && !this.state.detailurl)
            return this.state.searchresult.data.results.map(res => {
                return <Vehicleslist onclickdetails={this.onclickdetails} content={res} key={index++}/>
            });
        else if (this.state.search === "" && this.state.type === "starships" && this.state.searchresult && this.state.searchresult.data && this.state.searchresult.data.results && !this.state.detailurl)
            return this.state.searchresult.data.results.map(res => {
                return <Starshiplist onclickdetails={this.onclickdetails} content={res} key={index++}/>
            });
        else if (this.state.searchresult && this.state.searchresult.data && !this.state.searchresult.data.results && this.state.detailurl)
            return <Card onclickdetails={this.onclickdetails} content={this.state.searchresult.data} key={index++}/>
        else if (this.state.search !== "" && this.state.searchresult && this.state.searchresult.data && !this.state.searchresult.data.results)
            return <Card onclickdetails={this.onclickdetails} content={this.state.searchresult.data} key={index++}/>
        else
            return ;
    }
    
    nextPage = () => {
        if (this.state.searchresult && this.state.searchresult.data && this.state.searchresult.data.next)
        {
            axios.post("http://localhost:3001/search/nextpage", {page : this.state.searchresult.data.next})
            .then(result => {
                if (result && result.data && result.data.data)
                {
                    this.setState({detailurl : null, searchresult : result.data})
                    if (result.data.data.next)
                        this.setState({nextpage : "block"})
                    else
                        this.setState({nextpage : "none"})
                    if (result.data.data.previous)
                        this.setState({precpage : "block"})
                    else
                        this.setState({nextpage : "none"})
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
        else
            return("");
    }

    precPage = () => {
        if (this.state.searchresult && this.state.searchresult.data && this.state.searchresult.data.previous)
        {
            axios.post("http://localhost:3001/search/nextpage", {page : this.state.searchresult.data.previous})
            .then(result => {
                if (result && result.data && result.data.data)
                {
                    this.setState({detailurl : null, searchresult : result.data})
                    if (result.data.data.next)
                        this.setState({nextpage : "block"})
                    else
                        this.setState({nextpage : "none"})
                    if (result.data.data.previous)
                        this.setState({precpage : "block"})
                    else
                        this.setState({precpage : "none"})
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
        else
            return("");
    }

    onclickdetails = (detailurl) => {
        if (detailurl)
        {
            axios.post("http://localhost:3001/search/clickdetail", {url : detailurl})
            .then(result => {
                if (result && result.data && result.data.data)
                {
                    this.setState({detailurl : detailurl, searchresult : result.data})
                    if (result.data.data.next)
                        this.setState({nextpage : "block"})
                    else
                        this.setState({nextpage : "none"})
                    if (result.data.data.previous)
                        this.setState({precpage : "block"})
                    else
                        this.setState({precpage : "none"})
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    noResult() {
        if (this.state.searchstatus === "error")
            return (
                <div style={{color:  "white"}} className={styles.errordiv}>
                    Oops.. it looks like their is no result for that request..
                </div>
            )
    }

    render() {
        return (
            <div>
                <div className={styles.mainflex}>
                    <div className={styles.searchbox}>
                        <div className={styles.dropdown}>
                            <label>Search specific id</label>
                            <input className={styles.inputsearch} type="text" placeholder="Leave empty if you want a full list.." onChange={this.onChangeSearch} value={this.state.search}/>
                         </div>
                        <div className={styles.dropdown}>
                            <label>Type of search</label>
                            <select onChange={this.onChangeType} className="ui fluid dropdown" style={{borderRadius : 5}}>
                                <option value="people">People</option>
                                <option value="planets">Planets</option>
                                <option value="films">Films</option>
                                <option value="species">Species</option>
                                <option value="vehicles">Vehicles</option>
                                <option value="starships">Starships</option>
                            </select>
                         </div>
                        <div className={styles.inputs}>
                            <input onClick={this.OnClickSubmit} type="submit" value="Search !"/>
                        </div>
                    </div>
                </div>
                <div className={resultstyles.resultlist}>
                    {this.searchResults()}
                    {this.noResult()}
                    <div className={resultstyles.managepage}>
                        <div className={resultstyles.pagebuttons} style={{display : this.state.precpage}} onClick={this.precPage}>prec page</div>
                        {this.state.page}
                        <div className={resultstyles.pagebuttons} style={{display : this.state.nextpage}} onClick={this.nextPage}>next page</div>
                    </div>
                </div>
            </div>
        )
    }
}