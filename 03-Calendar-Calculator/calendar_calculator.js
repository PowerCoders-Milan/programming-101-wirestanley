//insert your pseudocode below
/*
create a variable for a date
find the number between 1 and 365 corresponding to the date
check the month of the date 
check the date to tetrive month
example: 
variable1: febuary
variable2: 7
days before: 31 + 7
result= 38
print it out 
*/

//Insert your code below
var month, day, set_result;


month = 'febuary';
day = 7;

if (month == 'january') {
  set_result = 0 + day;
}
if (month == 'febuary') {
  set_result = 31 + day;
}
if (month == 'march') {
  set_result = 59 + day;
}
if (month == 'april') {
  set_result = 90 + day;
}
if (month == 'may') {
  set_result = 120 + day;
}
if (month == 'june') {
  set_result = 150 + day;
}
if (month == 'july') {
  set_result = 181 + day;
}
if (month == 'july') {
  set_result = 212 + day;
}
if (month == 'august') {
  set_result = 243 + day;
}
if (month == 'september') {
  set_result = 273 + day;
}
if (month == 'october') {
  set_result = 304 + day;
}
if (month == 'november') {
  set_result = 334 + day;
}
if (month == 'december') {
  set_result = 365 + day;
}
window.alert(set_result);