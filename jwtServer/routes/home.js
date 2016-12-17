const debug = require('debug')('app:route:home');

module.exports = (req, res) => {
  debug('Request Home');
  res.send('Welcome');
};
