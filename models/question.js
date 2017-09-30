const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Question = new Schema({
  id: Number,
  misheard_lyric: String,
  misheard_string: String,
  correct_lyric: String,
  artist: String,
  song_title: String,
  audio_track: String,
  start_time: Number,
  duration: Number,
});

module.exports = mongoose.model('Question', Question);
