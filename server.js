const path = require('path');
// Independencies
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');

// const routes = require('./controllers');
const sequelize = require('./config/connection');

// Incorporate the custom helper methods
const hbs = exphbs.create({});


const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded ( { extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/user-routes'));

// Syncs Sequelize models to MySQL database on the server start.
sequelize.sync({ force: false }).then (() => {
    app.listen(PORT, () => console.log('Now listening'));
});

