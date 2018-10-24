const challenges = require('./challenges/challenges.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(challenges);
};
