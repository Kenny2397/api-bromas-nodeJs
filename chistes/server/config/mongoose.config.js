const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the Mongo database'))
    .catch((err) => console.log('Fail to connect to database', err));