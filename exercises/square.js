function square(num) {
    return function (num) {
        return num * num;
    }
}
let squareIt = square(5);
alert("The square of 5 = " + squareIt(5));