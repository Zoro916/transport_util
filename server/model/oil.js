var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var oil_schema = new Schema({
  id: String,
  date: String,
  oil: String,
});


module.exports = oil_schema;
