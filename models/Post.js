// models/Post.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { 
    type: String, 
    required: true 
  },
  content: { 
    type: String, 
    required: true 
  },
  imageBase64s: [{
    type: String
  }],
  author: { 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [{
    commentText: { 
      type: String, 
      required: true 
    },
    commentedBy: { 
      type: Schema.Types.ObjectId, 
      ref: 'User'
    },
    createdAt: { 
      type: Date, 
      default: Date.now 
    }
  }],
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Post', postSchema);
