if (process.env.NODE_ENV !== 'production') require('dotenv').config();
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
const cors = require('cors'); //needed to disable sendgrid security
app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose
  // for the app to work as a deployed app with mLAB MongoDB provision on Heroku, use:
  //  .connect(process.env.MONGODB_URI || 'mongodb://user:password123@ds035844.mlab.com:35844/heroku_mxr3c7lz', { useNewUrlParser: true})
  // for LOCAL Testing, use:
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/alzaDB', { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.error(err));
  
// Define API routes here
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/send-email", function(req, res) {
  
  const msg = {
    to: req.body.email.sender,
    from: req.body.email.recipient,
    subject: req.body.email.subject,
    html: "FROM: " + req.body.email.from + "\n" + req.body.email.text,
  };
  sgMail.send(msg)
  .then((msg) => res.send("Email has been sent."));
})

app.post('/logincheck', (req, res) => {
  // console.log(req.body);
  if(req.body.user == process.env.ADMIN && req.body.password == process.env.PASSWORD){
    res.send(true);
  }else{
    res.send(false);
  }
  
});
app.post('/api/savearticle/:id', function (req, res) {
  console.log(req.body);
  db.Article.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});
app.get('/api/savedarticles', (req, res) => {
  db.Article.find({})
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));

});
app.get('/api/savedarticles/:id', (req, res) => {
  db.Article.findOne({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));

});
app.get('/stories1/api/savedarticles/:id', (req, res) => {
  db.Article.findOne({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});
app.get('/stories2/api/savedarticles/:id', (req, res) => {
  db.Article.findOne({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});
app.delete('/api/deletearticles/:id', (req, res) => {
  db.Article.findOneAndDelete({ _id: req.params.id })
    .then(console.log(req.params.id))
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));

});
app.put('/api/updatearticles/:id', (req, res) => {
  db.Article.findByIdAndUpdate(
    req.params.id, req.body, { new: true }, function (err, doc) {
      if (err) return res.send(500, { error: err })

    })
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
