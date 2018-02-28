/* Write a function kebabize(input) to convert a camel case input string into a kebab case.

The function only needs to take care of lower- and upper-case alphabets. Non-alphabetical characters (e.g. numbers, punctuation (_ - + ? )) can be ignored

Examples:
kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
*/

function kebabize(input) {
  var arr = input.split("");
  var kebabizeArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      kebabizeArr.push("-" + arr[i].toLowerCase());
    } else {
      kebabizeArr.push(arr[i]);
    }
  }
  return kebabizeArr.join("");
}
module.exports = kebabize;
