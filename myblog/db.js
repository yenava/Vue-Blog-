var mongoose = require('mongoose');
var url = 'mongodb://localhost/blogServer';
mongoose.connect(url)
module.exports = mongoose