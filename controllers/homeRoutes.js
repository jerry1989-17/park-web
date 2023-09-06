// Inside homeRoutes.js (similarly for other route files)
const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
  res.render('home')
  // Handle your route logic here
});
router.get('/parking', (req, res) => {
  res.render('parking')
  // Handle your route logic here
});
router.get('/batterysection', (req, res) => {
  res.render('baterysection')
  // Handle your route logic here
});
router.get('/batterytable', (req, res) => {
  res.render('batterytable')
  // Handle your route logic here
});
router.get('/landing', (req, res) => {
  res.render('landing')
  // Handle your route logic here
});
router.get('/parking', (req, res) => {
  res.render('parking')
  // Handle your route logic here
});
router.get('/logs', (req, res) => {
  res.render('logs')
  // Handle your route logic here
});

router.get('/signup', (req, res) => {
  res.render('signup')
  // Handle your route logic here
});
router.get('/tiretable', (req, res) => {
  res.render('tiretable')
  // Handle your route logic here
});

module.exports = router;
