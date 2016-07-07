var chickenDatas = require('../models/chickenDatas')

/**
 * GET /datas
 */

exports.index = function(req, res) {
  var query = chickenDatas.find({}).sort({'date': -1}).limit(20);
  query.exec(function(err, chickens) {
    if (err) {
      res.json(err);
    }
    res.json(chickens);
  });
};
