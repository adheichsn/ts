function add(n1, n2, showResult, phrase) {
    // console.log(typeof number1);
    // if (typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error('incorrect input')
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1;
number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is = ';
var result = add(number1, number2, printResult, resultPhrase);
console.log(result);
