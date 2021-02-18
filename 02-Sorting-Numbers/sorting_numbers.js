//insert your pseudocode below
/*
create a variable in digit 
sort the variable in assending order
print it in this order
*/

//insert your code below
var num;

function listsGetSortCompare(type, direction) {
  var compareFuncs = {
    "NUMERIC": function(a, b) {
        return Number(a) - Number(b); },
    "TEXT": function(a, b) {
        return a.toString() > b.toString() ? 1 : -1; },
    "IGNORE_CASE": function(a, b) {
        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },
  };
  var compare = compareFuncs[type];
  return function(a, b) { return compare(a, b) * direction; }
}


num = [6, 9, 1];
window.alert(num.slice().sort(listsGetSortCompare("NUMERIC", 1)));