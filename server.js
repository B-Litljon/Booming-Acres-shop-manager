const express = require('express');
const path = require('path');
const app = express();
const oAuthRoutes = require('./routes/oAuthRoutes')

//\\-HANDLEBARS-//\\
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'hbs');

//\\-AUTHENTICATION ROUTES-//\\
app.use('/oAuthRoutes', oAuthRoutes.authRouter);
app.get('/authorize', (req, res) => {
  res.send('authorize endpoint');
 });

//\\-PATH TO STATIC PAGES-//\\
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/index.html'))
});

const PORT = 3001
app.listen(PORT, () =>
console.log(`listening on port: ${PORT}`)
)