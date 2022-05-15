const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(response => res.json({count: response.length, jokes: response}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};

module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id:req.params.id })
        .then(response => res.json({count: response.length, joke: response}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(response => res.json({count: response.length, new_joke: response}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};

module.exports.findOneAndUpdateSingleJoke = (req, res) => {
    Joke.findOneAndUpdate({_id:req.params.id},req.body,{new : true})
        .then(response => res.json({count: response.length, joke_updated: response}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};

module.exports.deleteOneJoke = (req, res) => {
    Joke.deleteOne({_id:req.params.id})
        .then(response => res.json({count: response.length, joke: response}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};