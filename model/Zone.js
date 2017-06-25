var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {type: String, default: ''},
    zipCodes: {type: Array, default: []},
}, {timestamps: true});

module.exports = mongoose.model('Zone', schema);