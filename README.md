# Prime-my-past   ② ⑶ ❺ ⓻ 𝟙𝟙

Enter a number, n and see a multiplication table of the first n prime numbers!

## How to run it
- Make sure you've got node.js installed first of all.
- Then in your terminal clone this repository to your local computer and move into the directory.
```
git clone git@github.com:kitkat119/prime-my-past.git
cd prime-my-past
```
- Next install the dependencies.
```
npm install
```
- Then get priming with:
```
node index.js
```

You will be prompted to enter the number of primes you wish to see. This must be a minimum of 1 and cannot be infinity, a decimal, a negative number or zero! If you do try and make an invalid request, you will be prompted to retry. The multiplication table of your chosen number of primes will then be printed!


![image](https://user-images.githubusercontent.com/26767598/32414525-0e091566-c221-11e7-933d-3b4f657df643.png)

## Tests

I wrote this application using Test Driven Development. Make sure you have jasmine installed:
```
npm install -g jasmine
```
To run the tests enter this into the terminal:
```
jasmine
 ```

 ## Tech
 - Javascript
 - Tested with jasmine
 - jasmine-spec-reporter to make the test output a bit more informative!

## My approach

I tried to follow the single responsibility principle when deciding on my functions and what they would each do.

The __PrimeFinder__ has an array to store the prime numbers, which are found by its 'getPrimes' method. This uses a while loop to check 'isPrime' on each number starting from 3 and push any that return true to the array until it contains the requested number of primes. It starts at 3 because I begin with the array already containing the prime 2. I chose to do this because the minimum request is for one prime number so the table will always contain at least the number 2. This may not be a good approach since it means the function cannot be used elsewhere but I felt it might speed up the process. The 'isPrime' method returns false straight away if a number is <= 1 or is devisible by 2, so then only odd numbers need to be checked.

I check the user input is valid within the __InputChecker__ function, which ensures the user cannot request infinity or zero primes and cannot enter a negative or decimal number. This has to return true for the readline to be closed and the program to continue running.

Once validated by the __InputChecker__, the __InputHandler__ converts the input into a usable form and asks the __PrimeFinder__ to 'getPrimes'. This can then be passed into the __MultiplicationTable__ so that it can format the array into a grid. This was the part that I found the hardest. It uses nested for loops to create a two-dimensional array of the multiplied values.

This table data is then passed to an instance of __Printer__, which joins each row together and logs this to the console.


 ## What I am pleased with

 I'm happy that I actually managed to get it working and printing out to the console. Upon first reading the requirements, the words 'prime numbers' filled me with dread but after reminding myself of my high-school maths, it all started to make much more sense! I hadn't used 'readline' before so that was interesting to learn about.

 As per the instructions, I tested out the 'getPrimes' function by asking it to return 20,000 prime numbers. The quickest time recorded was 33.380ms, which I thought was pretty good!

 I'm also pleased with the test driven approach I took. I think I have tested for all eventualities in terms of possible user inputs and I tried to make the tests clear and self-explanatory avoiding magic numbers as much as possible.

 ## If I had more time...

 I wasn't sure how to test the output to the console and struggled to find good information about this online. I tried using the jasmine spyOn to check console.log was being called by the Printer function but I'm not sure that this was that good a test really. It would be interesting to find out how to do this in a better way and how to mock the readline output.

 I would have liked to have formatted the structure of the table as the columns are not in line and it looks quite ugly and confusing at the moment. I was thinking each column would need to be as long as the last and so largest number but unfortunately, I ran out of time to work on implementing this.
