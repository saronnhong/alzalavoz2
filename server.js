const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const db = require('./models');
const bodyParser = require('body-parser');

// Setting CORS so that any website can
// Access our API
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
//   next();
// });

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose
  // for the app to work as a deployed app with mLAB MongoDB provision on Heroku, use:
   .connect(process.env.MONGODB_URI || 'mongodb://user:password123@ds017678.mlab.com:17678/heroku_55wdzbwp', { useNewUrlParser: true})
  // for LOCAL Testing, use:
  // .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/alzaDB', { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.error(err));
// Define API routes here

app.post('/api/savearticle/:id', function (req, res) {
  console.log(req.body);
  db.Article.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
