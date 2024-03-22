#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([{
    name: "userguessnumber",
    type: "number",
    message :"Guess one number between 1-10",
 },
]);
 
if(answer.userguessnumber === randomNumber){
    console.log(chalk.greenBright.bgCyanBright.bold("Congratulation!🥳 you guessed a right number."));
} else{
    console.log(chalk.bgGreen.yellowBright.bold("OPPS!😑 You guessed a wrong number."));
}
