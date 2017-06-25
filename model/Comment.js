var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    username: {type: String, default: ''},
    body: {type: String, default: ''}
}, {timestamps: true});

module.exports= mongoose.model('Comment', schema);