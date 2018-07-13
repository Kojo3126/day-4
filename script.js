//Write fizzbuzz in JavaScript, a standard interview question to write a function that
//prints the numbers 1 to 100, except that it instead
//prints "fizz" if the number is divisible by 3
//prints "buzz" if the number is divisible by 5
//prints "fizzbuzz" if the number is divisible by both


	for (var i=1; i <= 100; i++)
{
    if (i % 15  ==== 0)
        console.log("FizzBuzz");
    else if (i % 3 ==== 0)
        console.log("Fizz");
    else if (i % 5 ==== 0)
        console.log("Buzz");
    else
        console.log(i);
}
