const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/jokes/:id", JokeController.findOneSingleJoke);
    app.post("/api/jokes", JokeController.createJoke);
    app.put("/api/jokes/:id", JokeController.findOneAndUpdateSingleJoke);
    app.delete("/api/jokes/:id", JokeController.deleteOneJoke);
};