// const path = require('path');
// // Independencies
// const express = require('express');
// const exphbs = require('express-handlebars');
// const session = require('express-session');
// const helpers = require('./utils/helpers');

// const app = express();
// const PORT = process.env.PORT || 3001;

// // const routes = require('./controllers');
// const sequelize = require('./config/connection');
// const sequelizeStore = require('connect-session-sequelize')(session.Store);
// const sess = {
//     secret: 'super secret secret', 
//     cookie: {
//         maxAge: 300000,
//         httpOnly: true,
//         secure: false,
//         sameSite: 'strict',
//     },
//     resave: false,
//     saveUnitialized: true,
//     store: new sequelizeStore({
//         db: sequelize
//     })
// };

// // app.use(session(sess));

// // Incorporate the custom helper methods
// const hbs = exphbs.create({ helpers });



// // Set Handlebars as the default template engine.
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded ( { extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(require('./controllers/'));

// // Syncs Sequelize models to MySQL database on the server start.
// // sequelize.sync({ force: false }).then (() => {
// //     app.listen(PORT, () => console.log('Now listening'));
// // });

// app.listen(PORT, () => {
//     console.log(`App listening on port ${PORT}`);
//     sequelize.sync({ force: false });

// });

const path = require('path');
// const routes = require('./routes');
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// app.use(routes);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(require('./controllers/dish-routes'));
app.use(require('./controllers/home-routes'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


