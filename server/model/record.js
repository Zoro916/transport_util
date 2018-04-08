var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var record_schema = new Schema({
  record_id: { type: Schema.Types.ObjectId, ref: 'record_id' },
  address: String,
  date: String,
  time: String,
  transport_code: String,
});


module.exports = record_schema;
