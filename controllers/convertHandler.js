/*
*
*
*       Complete the handler logic below
*       
*       
*/
let units = ['miles', 'kilometers', 'pounds', 'kilograms', 'gallons', 'litres'];
let unit = ['mi', 'km', 'lbs', 'kg', 'gal', 'l'];

function ConvertHandler() {
  
  this.getNum = function(input) {
    
    let result = input.split(/[a-z]/);
    let decimals = 0;
    let divide = 0;
  
    for (let i in unit) {
      if (input.startsWith(unit[i])) {
        return 1;
      }
    }
  
    if (isNaN(result[0][0])) return 'invalid number';

    for (let i in result[0]) {
      let num = result[0][i];
      if (isNaN(num)) {
        if (num == '.') decimals++;
        console.log(decimals)
        if (num == '/') divide++;
        console.log(divide)
        if (decimals > 1 | divide > 1) return 'invalid number';
        if (num !== '.' && num !== '/') return 'invalid number';
      }
    }
  
    if (result[0].includes('/')) {
      result = result[0].split('/');
      result = result[0] / result[1];
      return result;
    }
    return result[0];
  };
  
  this.getUnit = function(input) {
    if (input.length < 1) return 'invalid unit'; 
    input = input.toLowerCase();
    let regex1 = /[a-z]/
    let letter = regex1.exec(input);
    let index = input.indexOf(letter)
    let result = input.slice(index,);
    
    for (let i in unit) {
      if (unit[i] == result) {
        return result;
        
      }
    }

    return 'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {
      switch(initUnit) {
        case 'mi': return 'km'; break;
        case 'km': return 'mi'; break;
        case 'lbs': return 'kg'; break;
        case 'kg': return 'lbs'; break;
        case 'gal': return 'l'; break;
        case 'l': return 'gal'; break;
        default:
          return 'unknown';
      }
  };

  this.spellOutUnit = function(unit) {
    switch(unit) {
        case 'mi': return 'miles'; break;
        case 'km': return 'kilometers'; break;
        case 'lbs': return 'pounds'; break;
        case 'kg': return 'kilograms'; break;
        case 'gal': return 'gallons'; break;
        case 'l': return 'litres'; break;
        default:
          return 'unknown';
      }
  };
  
  this.convert = function(initNum, initUnit) {
    const miToKm = 1.60934;
    const lbsToKg = 0.453592;
    const galToL = 3.78541;
    
    switch(initUnit) {
        case 'mi': return initNum * miToKm; break;
        case 'km': return initNum / miToKm; break;
        case 'lbs': return initNum * lbsToKg; break;
        case 'kg': return initNum / lbsToKg; break;
        case 'gal': return initNum * galToL; break;
        case 'l': return initNum / galToL; break;
        default:
          return 'unknown';
      }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    
    returnNum = returnNum.toFixed(5);
    if (returnNum.includes('.')) returnNum = parseFloat(returnNum);
    else {returnNum = parseInt(returnNum)};
    
    return {initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`};
  };
  
}

module.exports = ConvertHandler;
