/*
Exercise #1 - complete
Initialize an empty array below in the variable numbers.
*/
var numbers = [];


/*
Exercise #2 - complete
Using the loop provided for you below, use an array's push method to insert the nummbers  0 to 10 into positions 0 through 10 of the numbers array you just initialized above.'If you're not sure how to use the array push method go back and re read this module on data strucutres.'
*/

for(var i=0;i<10;i++){
    //Why is this being put into a for loop?
    numbers[0] = "0";
    numbers[1] = "1";
    numbers[2] = "2";
    numbers[3] = "3";
    numbers[4] = "4";
    numbers[5] = "5";
    numbers[6] = "6";
    numbers[7] = "7";
    numbers[8] = "8";
    numbers[9] = "9";
    numbers[10] = "10";
}

/*
Exercise #3 - complete, debug works in VSC but can't run
Test that you used the array push method correctly by printing the sum of the values at position 3 and 6 of the array (use the console.log() function to print to the console). 
The outputted value should be 9.
*/

var sum = numbers[3] + numbers[6]
console.log(sum)


/*
Exercise #4
Use the console.log() function and the array .pop() to add all the values in the array.
*/
//If .pop() removes the last value in the array, how do we add all the numbers?

var sum = 0;
/* remove this line to uncomment the code block
while(numbers.length != 0){
    //write pop function here
}
remove this line to uncomment the code block */
console.log(sum);


/*
Exercise #5
Create an empty object and assign it the variable car below.
*/
var car = {};

/*
Exercise #5
Give the car object a property called "colour" and assign it the value of "black". Test that your code works correctly by outputing property make to the console. You should see the value "black" printed out.
*/