const express = require('express');
const router = require('express').Router();




// GET all Tasks
router.get('/', async (req, res) => {
  res.json(tasks);
});












module.exports = router;