const axios = require("axios");

exports.postSearch = (req, res) => {
    let wookie = false;
    let requestUrl = "https://swapi.dev/api/" + req.body.data.type + "/" + req.body.data.search
    if (req.body.data.wookie)
    {
        wookie = true;
        if (requestUrl[requestUrl.length - 1] !== "/")
            requestUrl += "/?format=wookiee"
        else
            requestUrl += "?format=wookiee" 
    } 
    axios.get(requestUrl)
    .then(result => {
        res.status(200).json({status : true, wookie, req_data : req.body.data, data : result.data});
    })
    .catch(err => {
        res.status(400).json({status : false, wookie, req_data : req.body.data});
    })
};

exports.postNextPage = (req, res) => {
    axios.get(req.body.page)
    .then(result => {
        res.status(200).json({status : true, req_data : req.body.data, data : result.data});
    })
    .catch(err => {
        res.status(400).json({status : false, req_data : req.body.data});
    })
};

exports.postClickDetails = (req, res) => {
    axios.get(req.body.url)
    .then(result => {
        res.status(200).json({status : true, req_data : req.body.data, data : result.data});
    })
    .catch(err => {
        res.status(400).json({status : false, req_data : req.body.data});
    })
};

exports.postHomeWorld = (req, res) => {
    axios.get(req.body.url)
    .then(result => {
        res.status(200).json({data : result.data});
    })
    .catch(err => {
        res.status(400).end();
    })
};