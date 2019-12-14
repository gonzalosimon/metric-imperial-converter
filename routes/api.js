/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
    
      // Input
      var input = req.query.input.toLowerCase();

      // Get Number and Unit
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);

      // Check for Valid Input
      if (initNum == 'invalid number' && initUnit == 'invalid unit') return res.send('invalid number and unit');
      else if (initNum == 'invalid number') return res.send('invalid number');
      else if (initUnit == 'invalid unit') return res.send('invalid unit');


      // Converters
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);


      // Return Json to Page
      var toJson = toString;
      return res.json(toJson);

  });
  
};
