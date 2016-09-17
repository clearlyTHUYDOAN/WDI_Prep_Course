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

//Exercise 4 - sol'n from internet - don't understand

var size = 8;
var block = "#";
var space = " ";

for (var i = 1; i <= size; i++) {
  var line = '';

  for (var y = 1; y <= size; y++){
    if (i%2) {
        if (y%2) {
            line = line + space;
        } else {
            line = line + block;
        }
    } else {
        if (y%2) {
            line = line + block;
        } else {
            line = line + space;
        }
    }
  }

  console.log(line);
}

