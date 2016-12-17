const debug = require('debug')('app:router');
const express = require('express');

const homeRoute = require('./home');

const addRoute = (router, route, func) => {
  router.get(route, func);
};

module.exports = () => {
  const router = express.Router();

  addRoute(router, '/', homeRoute);

  return router;
};
