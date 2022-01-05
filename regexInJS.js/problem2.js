let fields = function (str) {
  return str.split(/[ \t,]+/);
};

let str1 = "Pete,201,   Student";
console.log(fields(str1));