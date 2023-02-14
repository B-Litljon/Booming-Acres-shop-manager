const express = require('express');

const app = express();

const oAuthRoutes = require('./routes/oAuthRoutes')

//new line of code
app.set('view engine', 'hbs');

app.use('/oAuth', oAuthRoutes);
app.get('/authorize', (req, res) => {
    res.send('authorize endpoint');
});



const PORT = 3001
app.listen(PORT, () =>
console.log(`listening on port: ${PORT}`)
)