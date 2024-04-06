#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, // Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_anser = await inquirer.prompt([
    {
        name: "from",
        message: " Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "to",
        message: " Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "amount",
        message: " Enter from Amount",
        type: "number",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
]);
let fromAmount = currency[user_anser.from];
let toAmount = currency[user_anser.to];
let amount = user_anser.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
