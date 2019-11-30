/**
  * For authentication.
  http://www.passportjs.org/docs/configure/
  https://stackoverflow.com/questions/32936193/error-passport-initialize-middleware-not-in-use-what-order-to-make-calls
  */

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const orm = require('../orm.js');

const userDb = orm.user;

// the strategy used to authenticate logins
passport.use(new LocalStrategy(
  ((username, password, done) => {
    userDb.findOne({ where: { username } }).then((user) => {
      if (user === undefined || user == null) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }),
));

passport.serializeUser((user, done) => {
  console.log('serialize');
  done(null, user.username);
});

passport.deserializeUser((username, done) => {
  console.log('DeSerialize');
  userDb.findOne({ where: { username } }).then(users => done(null, users));
});

module.exports = passport;
