//While and Do while loop

// while (condition){

// }

let index = 0 

while(index <=10){
    console.log(`value of index is :- ${index}`)

    index = index + 2 
}

// This while loop starts with index initialized to 0.
// It continues executing as long as index is less than or equal to 10.
// Inside the loop, it logs the value of index, then increments index by 2 on each iteration.
// So, it prints even numbers from 0 to 10 inclusive (0, 2, 4, 6, 8, 10).

const heros = ['Hatodi','Doraimon','Ironman','pangyaaaa']; 

let arr = 0; 

while( arr < heros.length){
    console.log(`value is ${heros[arr]}`)
    arr = arr + 1 
}

// This while loop iterates over the elements of the heros array.
// It continues executing as long as arr is less than the length of the heros array.
// Inside the loop, it logs each hero's name using the current value of arr.
// After logging, it increments arr by 1 to move to the next index.

// do while loop 

// do { 

// } while (condition)

let score = 1 

do {
    console.log(`Score is ${score}`)
    score++;
}while (score <= 10 )

// This do...while loop starts with score initialized to 1.
// It executes the code block inside the loop first, then checks the condition. (it means even if you Declare the score "11" at first it will print the value "11" to the console then it will check the condition and 11 < 10 is false so it will stop loop and exit the block).
// Inside the loop, it logs the value of score, then increments score by 1 on each iteration.
// It continues looping as long as score is less than or equal to 10.
// Therefore, it prints the numbers from 1 to 10 inclusive.