var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var address_schema = new Schema({
  id: String,
  value: String,
  label: String,
});


module.exports = address_schema;
