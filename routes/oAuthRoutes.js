//\\-VARIABLES & IMPORTS-//\\
const express = require('express');
const codeGen = require('./../helpers/codeGen');
const authRouter = express.Router();
require('dotenv').config();
//require('./../helpers/codeGen')
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
  
    res.redirect(etsyUrl);
  });
authRouter.get('/authorize', (req, res) => {
    res.render('authentication', {
        oAuthRoute: oAuthRoutes
    })
})

// this route will handle all the oath credentials

//\\-MODULE EXPORTS-//\\
module.exports = {
    apiKey,
    redirectUri,
    scope,
    state,
    codeChallenge,
    authRouter
  };  