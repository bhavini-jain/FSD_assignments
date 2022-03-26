function reverseno(number) {
    var rev = 0;
    var rem = 0;
    while (number > 0) {
        rev = rev * 10 + number % 10;
        number = Math.floor(number / 10);

    }
    return rev;
}
console.log(reverseno(4563258));