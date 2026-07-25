function startsAndEndsSame(str) {

if (str.length === 0) return false;

return str[0] === str[str.length - 1];

}

console.log(startsAndEndsSame("radar"));

console.log(startsAndEndsSame("hello"));