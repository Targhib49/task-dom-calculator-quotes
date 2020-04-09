//Elements 
let calcButton = document.getElementById("calc-button")
let lowerDisplay = document.getElementById("lower-display")
lowerDisplay.innerText = "0";

let count = 0;

// let quotesGeneratorScreen = document.getElementById("quotes-screen")
// let quotesGeneratorButton = document.getElementById("quotes-button")

/*
const operation = (op1, oper, op2) => {
  
}*/

const display = event => {
    if (count < 18) {
        if (event.target.matches(".numButton")) {
            let number = event.target.id.replace("no-", "")
            if (lowerDisplay.innerText == 0) {
                lowerDisplay.innerText = number
            } else {
                lowerDisplay.innerText += number
            }
        }

        if (event.target.matches(".opButton")) {
            let oper = ""
            let operInd = event.target.id.replace("op-", "")
            if (operInd == 1) {
                oper = "+"
            } else if (operInd == 2) {
                oper = "-"
            } else if (operInd == 3) {
                oper = "x"
            } else if (operInd == 4) {
                oper = "/"
            } else if (operInd == 5) {
                oper = "^"
            } else if (operInd == 6) {
                oper = "%"
            } else if (operInd == 7) {
                oper = "\\"
            } else if (operInd == 8) {
                oper = "!"
            }
            lowerDisplay.innerText += oper
        }

        if (event.target.matches(".myButton")) {
            let button = ""
            let buttonInd = event.target.id.replace("but-", "")
            if (buttonInd == 1) {
                alert("This button is under maintenance")
            } else if (buttonInd == 2) {
                button = "."
            } else if (buttonInd == 3) {
                alert("in")
            } else if (buttonInd == 4) {
                lowerDisplay.innerText = 0
            } else if (buttonInd == 5) {
                alert("This button is under maintenance")
            } else if (buttonInd == 6) {
                alert("This button is under maintenance")
            }
            lowerDisplay.innerText += button
        }

        count++
    } else {
        alert("Max number limit reached")
    }
}
/*
const quotesGen = () => {
    let quotes1 = "“Mathematics expresses values that reflect the cosmos, including orderliness, balance, harmony, logic, and abstract beauty.”<br> ― Deepak Chopra "
    let quotes2 = "“The difference between the poet and the mathematician is that the poet tries to get his head into the heavens while the mathematician tries to get the heavens into his head.”<br>― G.K. Chesterton"
    let quotes3 = "“It is the story that matters not just the ending.”<br>― Paul Lockhart, A Mathematician's Lament: How School Cheats Us Out of Our Most Fascinating and Imaginative Art Form"
    let quotes4 = "“But in my opinion, all things in nature occur mathematically.”<br>― Rene Decartes"
    let quotes5 = "“The land of easy mathematics where he who works adds up and he who retires subtracts.”<br>― Núria Añó"

    if (count < 5){
        count += 1
    } else {
        count = 1
    }
    
    if (count == 1) {
        quotesGeneratorScreen.innerHTML = quotes1
    } else if (count == 2) {
        quotesGeneratorScreen.innerHTML = quotes2
    } else if (count == 3) {
        quotesGeneratorScreen.innerHTML = quotes3
    } else if (count == 4) {
        quotesGeneratorScreen.innerHTML = quotes4
    } else if (count == 5) {
        quotesGeneratorScreen.innerHTML = quotes5
    }

}*/


calcButton.addEventListener("click", display)
// operatorButton.addEventListener("click", display)
// secondOperandButton.addEventListener("click", display)
// quotesGeneratorButton.addEventListener("click", quotesGen)