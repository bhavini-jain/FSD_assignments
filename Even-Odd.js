function EvenOdd(arr, n) {
    var even_count = 0;
    var odd_count = 0;


    for (var i = 0; i < n; i++) {


        if (arr[i] % 2 != 0)
            odd_count++;
        else
            even_count++;
    }

    console.log("Number of even elements = " + even_count +
        " " + "Number of odd elements = " + odd_count);
}


var arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var n = arr.length;


EvenOdd(arr, n);