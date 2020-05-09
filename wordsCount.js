const R = require("ramda");

const testString = "This is test string where i can consider words count";
const explode = (str) => str.split(/\s+/);
const count = (arr) => arr.length;
const log = console.log;
const countWord = R.compose(log, count, explode);

countWord(testString);
