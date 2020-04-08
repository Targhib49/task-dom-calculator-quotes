let firstOperandScreen = document.getElementById("operand-1-screen")
let secondOperandScreen = document.getElementById("operand-2-screen")
let operatorScreen = document.getElementById("operator-screen")
let resultScreen = document.getElementById("result-screen")
let firstOperandButton = document.getElementById("operand-1-button")
let operatorButton = document.getElementById("operator-button")
let secondOperandButton = document.getElementById("operand-2-button")
let quotesGeneratorScreen = document.getElementById("quotes-screen")
let quotesGeneratorButton = document.getElementById("quotes-button")

let op1
let oper
let op2
let count = 1

const operation = (op1, oper, op2) => {
    if (oper == "+") {
        return op1 + op2
    } else if (oper == "-") {
        return op1 - op2
    } else if (oper == "X") {
        return op1 * op2
    } else if (oper == "/") {
        return op1 / op2
    } else if (oper == "%") {
        return op1 % op2
    } else if (oper == "^") {
        return op1 ** op2
    }
}

const display = event => {
    if (event.target.matches(".myButtonFirst")) {
        const id = event.target.id.replace("no-", "")
        firstOperandScreen.innerText = id
        op1 = Number(id)
    }

    if (event.target.matches(".myButtonOperator")) {
        const id = event.target.id.replace("op-", "")
        operatorScreen.innerText = id
        oper = id
    }

    if (event.target.matches(".myButtonSecond")) {
        const id = event.target.id.replace("no-", "")
        secondOperandScreen.innerText = id
        op2 = Number(id)
    }

    if (op1 != null && oper != null && op2 != null) {
        resultScreen.innerText = 0

        let result = operation(op1, oper, op2)
        resultScreen.innerText = result
    }
}

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

}


firstOperandButton.addEventListener("click", display)
operatorButton.addEventListener("click", display)
secondOperandButton.addEventListener("click", display)
quotesGeneratorButton.addEventListener("click", quotesGen)