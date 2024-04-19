// for 

for ( let i = 0; i <= 10 ; i++ ){ 
    const elemnt = i; 
    //Also you can add if else inisde this loop .

    if(elemnt == 5 ){
        console.log("5 is the best number :p ");
    }

    console.log(elemnt);    
}


// if you again use "i" insde for loop then it wont give error because of the block scope its inside that only for example; 

// for (let i =  0 ; i<=10; i++ ){

// }
 
// console.log(elemnt); // This is not accesabile because of the block scope its inside loop 

// firstly index will be initialized then condition will be checked and if condition is true then code inside blocks will run then it will increment after that and again itll check condition then code and then increament..

// Explanation of the for loop:
// 1. Initialization: 'index' starts at 0.
// 2. Condition Check: The loop checks if 'index' is less than 10.
// 3. Code Execution: If the condition is true, the code inside the loop runs.
// 4. Increment: After running the code, 'index' is increased by 1.
// 5. The loop repeats steps 2-4 until the condition becomes false.

// nested loops 
for(let i = 0 ; i<=10 ; i++) {
       console.log(`outer loop:- ${i}`)

    for(let j = 0 ; j<=10; j++ ){
        console.log(`inner loop:- ${j} outer loop:- ${i}`)
    }

}

// Obersve the output of this nesting of loops firstly itll execute the outerloop then innerloop will fully executed then again outerloop will execute then inner loop fully executed and so on ..........

//// Explanation of the nested loops:
// 1. The outer loop starts with 'i' initialized to 0.
// 2. For each iteration of the outer loop, the inner loop begins.
// 3. The inner loop runs completely from start (0) to end (10), logging each value of 'j' along with the current value of 'i'.
// 4. Once the inner loop completes all its iterations (from 0 to 10), it exits.
// 5. The outer loop then increments 'i' by 1 and the process repeats.
// 6. This means that for every single iteration of the outer loop, the inner loop runs through its entire cycle of 0 to 10.
// 7. The loops continue this pattern until the outer loop condition (i <= 10) is no longer true.

for(let i = 1 ; i<=10; i++){
    for(let j = 1 ; j<=10; j++ ){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

// 1. Initialization of the outer loop: Start 'i' at 1.
// 2. Condition check for the outer loop: Continue looping as long as 'i' is less than or equal to 10.
// 3. Start of the outer loop body: Each time the outer loop runs, it starts the inner loop.
// 4. Initialization of the inner loop: Start 'j' at 1.
// 5. Condition check for the inner loop: Continue looping as long as 'j' is less than or equal to 10.
// 6. Execution of the inner loop body: Each time the inner loop runs, it prints the product of 'i' and 'j'. This is done by multiplying 'i' and 'j' and then logging the result in the format "i * j = product".
// 7. Increment of the inner loop: After printing, increase 'j' by 1.
// 8. Once 'j' exceeds 10, the inner loop exits and the outer loop increments 'i' by 1.
// 9. The outer loop then starts the inner loop again with 'j' resetting back to 1.
// 10. This process repeats until 'i' exceeds 10. When this happens, the outer loop also exits.
// 11. At the end of these loops, you have printed a multiplication table from 1 to 10 for each value of 'i'.


const heros = ['Hatodi','Doraimon','Ironman','pangyaaaa'];

console.log(`lenght of the array ${heros.length}`);

for (let i = 0; i < heros.length; i ++){
    const element = heros[i];
    console.log(element);
}

// Explanation:
// 1. The loop starts with 'i' initialized at 0.
// 2. It checks if 'i' is less than the length of the array, which is 4.
// 3. If true, the code inside the loop executes and prints the hero at the current index.
// 4. 'i' is incremented by 1 and the check repeats until 'i' is equal to 4.
// 5. Once 'i' is 4, the condition 'i < heros.length' becomes false, and the loop stops.

// Note on changing the condition:
// If you change the loop condition to 'i <= heros.length', 'i' will reach 5. Since there is no index 4 in the array (index starts at 0),
// trying to access 'heros[4]' will return 'undefined'. As a result, 'undefined' will be printed as the last output of the loop.



// break and continue keyword in loop 

for(i = 0; i <= 20; i++ ){
    if(i == 5){
        console.log(`detected "5" `)
        break;
    }
    console.log(`Value of i is :- ${i}`);
    }


for(i = 0; i <= 20; i++ ){
    if(i == 5){
        console.log(`detected "5" `)
        continue;
    }
    console.log(`Value of i is :- ${i}`);
    }





