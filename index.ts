import inquirer from "inquirer";
//1) computer will generate a random number
//user input for guessing
//compare user input with computer generated number
const randomNumber = Math.floor(Math.random()*10+1);//Math.random()is used for generating random number but the values are betwwn 0 to 1,math.floor used to remove decimal part

const answer= await inquirer.prompt([ //array,square brackets,
    {
       name:"usergGuessedNumber",//lists{}object ,key and value pair in object and comma is used here
       type:"number",
       message:"Please guess a number",
 },
]);
if(answer.usergGuessedNumber === randomNumber){
console.log("congratulations ! you guessed right number;");
}else{
console.log("you guessed wrong number");
}




