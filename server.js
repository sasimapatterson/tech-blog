    require('dotenv').config();

    const path = require('path');
    const express = require('express');
    const session = require('express-session');
    const exphbs = require('express-handlebars');

    const routes = require('./controllers');
    const helpers = require('./utils/helpers');
    const sequelize = require('./config/connection');
    const sequelizeStore = require('connect-session-sequelize')(session.Store);

    const app = express();
    const PORT = process.env.PORT || 3001;
    const hbs = exphbs.create({ helpers });
    
    
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
    
    
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
    
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// app.use(require('./controllers/'));
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


