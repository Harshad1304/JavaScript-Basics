// Below is the basic Switch Case syntax.
// Switch statements are used to perform different actions based on different conditions.

// Syntax:
// switch (expression) {
//     case value1:
//         // code block
//         break;
//     case value2:
//         // code block
//         break;
//     default:
//         // code block
// }

// Example:
const month = 3; 

switch (month) {
    case 1:
        console.log("January");
        break; // Break statement is important to exit the switch statement after executing the corresponding case.
    case 2:
        console.log("February");
        break; 
    case 3:
        console.log("March");
        break; 
    case 4:
        console.log("April");
        break; 
    default:
        console.log("Invalid month"); // Default case is executed if no matching case is found.
        break;
}

// Without the break statement, the switch statement would continue to execute
// the code blocks below the matching case until a break is encountered.
// The default case is optional and will execute if no matching case is found.
