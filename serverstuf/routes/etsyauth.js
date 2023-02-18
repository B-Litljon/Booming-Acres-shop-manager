//\\-VARIABLES & IMPORTS-//\\
const express = require('express');
const codeGen = require('../helpers/codeGen');
const AuthToken = require('../db/authtoken');
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
        oAuthRoute: authRouter
    })
})

//\\-AUTH TOKEN ENCRYPTION AND STORAGE-//\\
// this route will handle extracting the oAth token from the callback url, =>
const bcrypt = require('bcrypt')
const saltRounds = 12;

// POST request to exchange authorization code for access token
authRouter.post('/callback', async (req, res) => {
  const { code } = req.query;
  const response = await fetch('/authorize', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  });
  const result = await response.json();
  const accessToken = result.access_token;
  const hashedToken = await bcrypt.hash(accessToken, saltRounds);
  const newAuthToken = await AuthToken.create({
    token: hashedToken
  });
  res.redirect('/');
});

//\\-MODULE EXPORTS-//\\
module.exports = {
    apiKey,
    redirectUri,
    scope,
    state,
    codeChallenge,
    authRouter,
    callback: authRouter // export authRouter as callback
  };  