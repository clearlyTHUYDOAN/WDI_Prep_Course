//Exercise 1 - complete

for (var i = 1; i <= 100; i++) {
    console.log(i);
}

//Exercise 2 - sol'n from internet - attempting to understand

var content = " ";

for (var i = 1; i <= 7; i++) {
    content = content + "#";
    console.log(content);
}

//Exercise 3 - complete

for (var i = 1; i <= 100; i++) {
        if (i % 5 === 0) {
            console.log("fizz");
        } else if (i % 3 === 0) {
            console.log("buzz");
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        } else {
    console.log(i);
    }
}

//Exercise 4 - incomplete

var size = 8;
var block = "#";
var space = "";

for (var i =1; i <= size; i++) {
    var line = " ";

