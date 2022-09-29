    const dotenv = require('dotenv').config();
    const session = require('express-session');
    const helpers = require('./utils/helpers');
    const path = require('path');
    const routes = require('./controllers');
    const express = require('express');
    const exphbs = require('express-handlebars');
    const hbs = exphbs.create({ helpers });
    const app = express();
    const PORT = process.env.PORT || 3001;
    const sequelize = require('./config/connection');
    
    const sequelizeStore = require('connect-session-sequelize')(session.Store);
    
    const sess = {
      secret:'super secret secret', 
      cookie: {
        // maxAge: 300000,
        // httpOnly: true,
        // secure: false,
        // sameSite: 'strict',
      },
      resave: false,
      saveUnitialized: true,
      store: new sequelizeStore({
        db: sequelize
      }),
    };
    
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



// app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


