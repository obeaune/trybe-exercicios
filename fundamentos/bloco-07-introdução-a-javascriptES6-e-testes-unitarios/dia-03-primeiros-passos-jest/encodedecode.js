function encode(str) {
  let arrDaStr = str.split('');
  let obj = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  for (let index = 0; index < arrDaStr.length; index += 1) {
    for (let prop in obj) {
      if (arrDaStr[index] === prop) {
        arrDaStr[index] = obj[prop];
      }
    }
  }
  return arrDaStr.join('');
}

function decode(str) {
  let arrDaStr = str.split('');
  let obj = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  for (let index = 0; index < arrDaStr.length; index += 1) {
    for (let prop in obj) {
      if (arrDaStr[index] === obj[prop]) {
        arrDaStr[index] = prop;
      }
    }
  }
  return arrDaStr.join('');
}

module.exports = {
  encode,
  decode,
};