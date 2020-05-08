/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let str = '1';
  for (let i = 1; i < n; i++) {
    let tempStr = '';
    let lastChar = str[0];
    let count = 1;
    for (let m = 1; m < str.length; m++) {
      if (str[m] !== lastChar) {
        tempStr += (String(count) + String(lastChar));
        lastChar = str[m];
        count = 0;
      }
      count++;
    }
    tempStr += (String(count) + String(lastChar));
    str = tempStr;
  }
  return str;
};

