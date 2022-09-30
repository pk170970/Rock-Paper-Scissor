// //--------------------------------------------- Method -1  -----------------------------

// //Declarations

let userScore = document.getElementById("userScoreVal");
let ComputerScore = document.getElementById("compScoreVal");
let userResult = document.getElementById("result-user-stat");
let computerResult = document.getElementById("result-comp-stat");
let winner = document.getElementById("result-final-stat");
let userCount = 0;
let computerCount = 0;
const scissor = document.getElementById("s");
const paper = document.getElementById("p");
const rock = document.getElementById("r");
const resetButton= document.getElementById("btn-reset");
const buttons = document.querySelectorAll(".choice");


// Triggering Button event


buttons.forEach((button, index) => {
    let optionChosen = buttons[index].id;
    button.addEventListener("click", () => {
        let computerOutput = compRandomFunc();

        console.log(optionChosen, computerOutput);


        // UserWins 
        if (((optionChosen === "r") && (computerOutput === "s")) || ((optionChosen === "s") && (computerOutput === "p")) || ((optionChosen === "p") && (computerOutput === "r"))) {
            userScore.textContent = ++userCount;
            userResult.textContent= `User: ${optionChosen.toUpperCase()}`;
            computerResult.textContent= `Computer: ${computerOutput.toUpperCase()}`;

        }

        // Computer Wins
        if (((optionChosen === "p") && (computerOutput === "s")) || ((optionChosen === "r") && (computerOutput === "p")) || ((optionChosen === "s") && (computerOutput === "r"))) {
            ComputerScore.textContent = ++computerCount;
            userResult.textContent= `User: ${optionChosen.toUpperCase()}`;
            computerResult.textContent= `Computer: ${computerOutput.toUpperCase()}`;
        }

        // draw 
        if (((optionChosen === "p") && (computerOutput === "p")) || ((optionChosen === "r") && (computerOutput === "r")) || ((optionChosen === "s") && (computerOutput === "s"))) {
             userResult.textContent= `User: ${optionChosen.toUpperCase()}`;
            computerResult.textContent= `Computer: ${computerOutput.toUpperCase()}`;
        }

        if (userCount > computerCount) {
            winner.textContent = "User Wins";
        }
        else if(userCount < computerCount){
            winner.textContent = "Computer Wins";
        }
        else{
            winner.textContent = "Match Draw";
        }

        // reset game
        resetButton.addEventListener("click",()=>{
            userCount=0;
            computerCount=0;
            userScore.textContent=userCount;
            ComputerScore.textContent= computerCount;
            winner.textContent= "Winner: ";
            userResult.textContent= `User: `;
            computerResult.textContent= `Computer: `;
        })

    });
})


// Random function generator 

function compRandomFunc() {
    let randomValue = Math.floor(Math.random() * 3);
    return (buttons[randomValue].id);
}

// //--------------------------------------------- Method -2  -----------------------------

// let userScore = document.getElementById("userScoreVal");
// let ComputerScore = document.getElementById("compScoreVal");
// let userResult = document.getElementById("result-user-stat");
// let computerResult = document.getElementById("result-comp-stat");
// let winner = document.getElementById("result-final-stat");
// let userCount = 0;
// let computerCount = 0;
// const scissor = document.getElementById("s");
// const paper = document.getElementById("p");
// const rock = document.getElementById("r");
// const resetButton = document.getElementById("btn-reset");

// const buttons = document.querySelectorAll(".choice");

// buttons.forEach(button =>
//     button.addEventListener("click", (e) => {
//         let computerOutput = compRandomFunc();
//         let userOutput = button.id;
//         console.log(userOutput, computerOutput);


//         if(userOutput===computerOutput){
//             console.log("same");
//         }

//         else if (userOutput === "r") {
//             if (computerOutput === "s") {
//                 userScore.textContent = ++userCount;
//             } else if(computerOutput === "p"){
//                 ComputerScore.textContent = ++computerCount;
//             }
//             console.log(computerCount);
//         }
//         else if (userOutput === "s") {
//             if (computerOutput === "p") {
//                 userScore.textContent = ++userCount;
//             } else if(computerOutput === "r") {
//                 ComputerScore.textContent = ++computerCount;
//             }

//         }
//         else if (userOutput === "p") {
//             if (computerOutput === "r") {
//                 userScore.textContent = ++userCount;
//             } else if(computerOutput === "s") {
//                 ComputerScore.textContent = ++computerCount;
//             }
//         }
//         else{
//             console.log(userOutput, computerOutput);
//         }
    

//         if(userCount> computerCount){
//             winner.textContent= "User Wins";
//         }
//         else if(userCount < computerCount){
//             winner.textContent= "Computer Wins";
//         }
//         else{
//             winner.textContent= "Match Draw";
//         }

//         resetButton.addEventListener("click",()=>{
//                 userCount=0;
//                 computerCount=0;
//                 userScore.textContent=userCount;
//                 ComputerScore.textContent= computerCount;
//                 winner.textContent= "Winner: ";
//                 button.removeEventListener();
//             })
//     }));


// function compRandomFunc() {
//     let randomValue = Math.floor(Math.random() * 3);
//     return (buttons[randomValue].id);
// }


