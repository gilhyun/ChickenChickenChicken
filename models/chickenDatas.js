var mongoose = require('mongoose');
var chickenDatasSchema = new mongoose.Schema({
  date: { type: Date },
  week: { type: String },
  gender: { type: String },
  age: { type: String },
  city: { type: String },
  local: { type: String },
  store: { type: String },
  phoneCall: { type: Number }
});

module.exports = mongoose.model('chickenDatas', chickenDatasSchema, 'chickenDatas');
