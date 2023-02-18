//\\-VARIABLES & IMPORTS-//\\
const express = require('express');
const codeGen = require('./../helpers/codeGen');
const authRouter = express.Router();
const fetch = require('node-fetch');
require('dotenv').config();

const apiKey = process.env.API_KEY;
const redirectUri = ('https://b-litljon.github.io/Booming-Acres-shop-manager');
const scope = ('transactions_r');
const state = codeGen.stateGenerator;
const codeChallenge = codeGen.codeChallenge;
console.log(apiKey);
console.log(redirectUri);
console.log(scope);
console.log(state);
console.log(codeChallenge);





//\\-AUTHORIZATION ROUTE-//\\
authRouter.get('/authorize', (req, res) => {
    const etsyUrl = `https://www.etsy.com/oauth/connect?response_type=code&client_id=${apiKey}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}&code_challenge=${codeChallenge}&code_challenge_method=S256`
  //                  etsy authenticationUrl, with the callback uri attached to it. when authentication happens you will be taken back to my github page
    res.redirect(etsyUrl);
  });
authRouter.get('/authorize', (req, res) => {
    res.render('authentication', {
        oAuthRoute: oAuthRoutes
    })
})

//\\-AUTH TOKEN ENCRYPTION AND STORAGE-//\\

// this route will handle extracting the oAth token from the callback url, =>
authRouter.get('/callback', (req, res) => {
  const { code } = req.query; // extract the OAuth code from the query parameters in the callback URL
  // use the OAuth code to obtain an access token
  // encrypt and store the access token securely, such as in a database or environment variable
  res.redirect('/'); // redirect the user to a success page or another appropriate page
});

// use a helper function to encrypt the value => 

// store it using sequelize => 

//\\-MODULE EXPORTS-//\\
module.exports = {
    apiKey,
    redirectUri,
    scope,
    state,
    codeChallenge,
    authRouter
  };  