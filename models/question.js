const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Question = new Schema({
  id: Number,
  misheard_lyric: String,
  correct_lyric: String,
  artist: String,
  song_title: String,
});

module.exports = mongoose.model('Question', Question);
