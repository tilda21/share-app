const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const path = require('path');
const errorHandler = require("errorhandler");
const cors = require("cors");
require('dotenv').config();

const app = express();

const port = process.env.PORT || 8000;

//connect to the database
mongoose.connect(process.env.MONGODB_URI,
   { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(errorHandler());
app.use(cors());

// to deploy
app.use(express.static(path.join(__dirname, "client", "build")))

app.use('/api', routes);



// to deploy
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});