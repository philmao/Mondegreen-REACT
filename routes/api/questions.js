const express = require('express');
const mongoose = require('mongoose');
const Question = require('../../models/question.js');

const router = express.Router();

// configure mongoose promises
mongoose.Promise = global.Promise;

router.get('/all', (req, res) => {
  Question.find()
  .then((doc) => {
    res.json(doc);
    // console.log(doc);
  }).catch((err) => {
    res.json(err);
  });
});

router.get('/:id', (req, res) => {
  Question.findOne({ id: req.params.id })
  .then((doc) => {
    res.json(doc);
  }).catch((err) => {
    res.json(err);
  });
});

module.exports = router;
