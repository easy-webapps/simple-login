'use strict';
// Load dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const Auth0Strategy = require('passport-auth0');
dotenv.load();

const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    console.log(profile);
    return done(null, profile);
  }
);

passport.use(strategy);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/login', passport.authenticate('auth0', {scope: 'openid email profile'}), (req, res) => {
  console.log('@@##', req, res);
  // res.redirect("/");
  res.json(true);
});

// Public route
app.post('/login2', (req, res) => {
  let deals = [
    // Array of public deals here
  ];
  res.json(deals);
})

app.listen(3000);
console.log('Serving deals on localhost:3000');