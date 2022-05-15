const express = require('express');

const app = express();


//import config
require('./server/config/mongoose.config');

//this line has possible work with json files
app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyJokeRoutes = require('./server/routes/jokes.route');
AllMyJokeRoutes(app);

//initialising server
app.listen(8000, () => console.log("the server is all fired up on port 8000"));