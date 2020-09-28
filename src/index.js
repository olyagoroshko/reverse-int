module.exports = function reverse (n) {
  if( n < 0 ){
      n= (n * (-1)).toString().split('').reverse().join("");
      return n;
  } else {
    n = n.toString().split('').reverse().join("");
      return n;
  }
}
