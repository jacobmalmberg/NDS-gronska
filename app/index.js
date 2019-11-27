const setupBoilerplate = require('./boilerplate/setup');

const { app, listen } =  setupBoilerplate();
const port = 8989;


// setup passport - must be done prior to router!
const passport = require('./boilerplate/passport.js');
app.use(passport.initialize());
app.use(passport.session());


// Bind REST controller to /api/*
const router = require('./controllers/rest.controller.js');
app.use('/api', router);

// parse application/json
//const bodyParser = require('body-parser');
//app.use(bodyParser.json())
//
// const formidable = require('express-formidable');
// app.use(formidable());
//app.use(bodyParser.json())

const orm = require('./orm.js');
const sequelize = orm.sequelize;

// sequelize.authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// Demo calls to model
const model = require('./model.js');

model.addUser('garphyttan','1234gronska');
listen(port, () => {
  console.log("server listening on port", port);
});
