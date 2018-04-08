var autoIncrement = require('mongoose-auto-increment');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/leijing');

var db = mongoose.connection;

var user_schema = require('./user');
var record_schema = require('./record');
var oil_schema = require('./oil');
var address_schema = require('./address');

autoIncrement.initialize(db);

user_schema.plugin(autoIncrement.plugin, { model: 'User', field: 'id' });
record_schema.plugin(autoIncrement.plugin, { model: 'Record', field: 'record_id' });
oil_schema.plugin(autoIncrement.plugin, { model: 'Oil', field: 'id' });
address_schema.plugin(autoIncrement.plugin, { model: 'Address', field: 'id' });

exports.User = db.model('User', user_schema);
exports.Record = db.model('Record', record_schema);
exports.Oil = db.model('Oil', oil_schema);
exports.Address = db.model('Address', address_schema);
