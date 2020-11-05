const axios = require("axios");

exports.postLogin = (req, res) => {
    if (req.body.username === "Luke" && req.body.password === "DadSucks")
        res.status(200).send(true)
    else
        res.status(200).send(false)
};