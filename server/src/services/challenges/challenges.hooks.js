

const verifyData = require('../../hooks/verify-data');

const populateChallenge = require('../../hooks/populate-challenge');

const formatName = require('../../hooks/format-name');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [verifyData(), populateChallenge()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [formatName()],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
