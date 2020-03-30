const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for newInfo
const NewInfoSchema = new Schema({
  information: {
    type: String,
    required: [true, 'The newInfo text field is required']
  }
})

//create model for newInfo
const NewInfo = mongoose.model('newInfo', NewInfoSchema, 'Information');

module.exports = NewInfo;