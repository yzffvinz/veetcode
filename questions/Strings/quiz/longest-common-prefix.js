/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  let prefix = '';
  let i = 0;
  do {
    let c = strs[0][i];
    if (undefined === c) break;
    let flag = true;
    for (let j = 1; j < strs.length; j++) {
      if (c !== strs[j][i]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      prefix += c;
    } else {
      break;
    }
  } while (++i);
  return prefix;
};

console.log(longestCommonPrefix(['abc']))
