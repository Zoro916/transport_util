var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user_schema = new Schema({
  id: String,
  name: String,
  auth_token: String,
});


module.exports = user_schema;
