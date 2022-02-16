const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  grade: {
    type: String,
    required: true,
  },
  focus: {
    type: String,
  },
  favoriteSubject: {
    type: String,
    required: true,
  },
  helpingSubjects: {
    type: Array,
    required: true,
  },
  bio: {
    type: String,
  },
  social: {
    snapchat: {
      type: String,
    },
    instagram: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
