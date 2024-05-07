import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "first_number" },
    { message: "Enter second number", type: "number", name: "second_number" },
    {
        message: "Select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.first_number + answer.second_number);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.first_number - answer.second_number);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.first_number * answer.second_number);
}
else if (answer.operator === "Division") {
    console.log(answer.first_number / answer.second_number);
}
else {
    console.log("Please select valid operator");
}
