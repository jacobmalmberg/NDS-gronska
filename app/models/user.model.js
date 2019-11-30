/**
 * Creates a user model and all its attributes
 */

function user(username, password) {
  this.username = username;
  this.password = password;
}

module.exports = user;
