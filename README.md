# Tech-Blog
CMS-style blog site. 

## Table of Contents
1. [Descriptions](#descriptions)
2. [Installations](#installations)
3. [Usage](#usage)
4. [Tech Use](#techUse)
5. [Contributing](#contributing)
6. [Link](#link)

## Descriptions
This tech-blog site is following the Model-View-Controller paradigm and using modularization approach. 

Modular programming is a software design technique that emphasizes separating the functionality of a program into independent, interchangeable modules, such that each contains everything necessary to execute only one aspect of the desired functionality.(https://en.wikipedia.org/wiki/Modular_programming)



## Installations 

To implement Handlebars.js for the Views folder
```pip
  npm install express-handlebars
```

To connect to a MySQL database for the Models, and create and Express.js API for the Controllers.
```pip
  npm install mysql2

  npm install sequelize
```

To use environtment variables
```pip
  npm install dotenv --save
```

To hash passwords
```pip
  npm install bcrypt
```

To add authentication
```pip
  npm install express-session

  npm install connect-session-sequelize
```

## Tech Use
* Handlebars.js : is a template engin that makes it easy to seperate HTML from the code that powers it. (https://sabe.io/tutorials/getting-started-with-handlebars-js)

* CSS : for styling the template.

* Heroku : 