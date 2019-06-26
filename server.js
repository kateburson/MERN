const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;

app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// const db = require("./config/keys").mLabURI;

// mongoose
//   .connect(db, { useNewUrlParser: true })
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});