const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs')
const oAuthRoutes = require('./routes/etsyauth')
const { authRouter, callback } = require('./routes/etsyauth');
//\\-HANDLEBARS-//\\
// app.set('views', path.join(__dirname, 'views')); 
// app.set('view engine', 'hbs');


//\\-AUTHENTICATION ROUTES-//\\
app.use('/oAuthRoutes', oAuthRoutes.authRouter);

app.use('/callback', callback);

// needs to be removed and updated to display handlebars instead 19-21
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3001
app.listen(PORT, () =>
console.log(`listening on port: ${PORT}`)
)