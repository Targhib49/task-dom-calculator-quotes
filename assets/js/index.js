//Elements 
let basicButton = document.getElementById("basic-button")
let pwidButton = document.getElementById("pwid-button")
let fsButton = document.getElementById("fs-button")

let basicInput1 = document.getElementById("basic-input-1")
let basicInput2 = document.getElementById("basic-input-2")
let pwidInput1 = document.getElementById("pwid-input-1")
let pwidInput2 = document.getElementById("pwid-input-2")
let fsInput1 = document.getElementById("fs-input")

let basicResult = document.getElementById("basic-result")
let pwidResult = document.getElementById("pwid-result")
let fsResult = document.getElementById("fs-result")

let basicEqual = document.getElementById("basic-equal")
let pwidEqual = document.getElementById("pwid-equal")
let fsEqual = document.getElementById("fs-equal")

let quotesGeneratorScreen = document.getElementById("quotes-screen")
let quotesGeneratorButton = document.getElementById("quotes-button")

let oper
let readBasic1 = 0
let readBasic2 = 0
let readPWID1 = 0
let readPWID2 = 0
let readFS = 0
let count = 1


const operatorSelection = event => {
    if (event.target.matches(".btn-basic")){
        oper = event.target.id.replace("op-","")
    }

    if (event.target.matches(".btn-pwid")){
        oper = event.target.id.replace("op-","")
    }

    if (event.target.matches(".btn-fs")){
        oper = event.target.id.replace("op-","")
    }
    console.log(oper);
    
}

const readInput = event => {
    readBasic1 = Number(basicInput1.value)
    readBasic2 = Number(basicInput2.value)
    readPWID1 = Number(pwidInput1.value)
    readPWID2 = Number(pwidInput2.value)
    readFS = Number(fsInput1.value)
}

const operation = event => {
    let resultBasic = 0
    let resultPWID = 0
    let resultFS = 0

    if (oper == "+"){
        resultBasic = readBasic1 + readBasic2
    } else if (oper == "-"){
        resultBasic = readBasic1 - readBasic2
    } else if (oper == "X"){
        resultBasic = readBasic1 * readBasic2
    } else if (oper == "/"){
        resultBasic = readBasic1 / readBasic2
    } else if (oper == "^"){
        resultPWID = readPWID1 ** readPWID2
    } else if (oper == "%"){
        resultPWID = readPWID1 % readPWID2
    } else if (oper == "\\"){
        alert("Under maintenance")
    } else if (oper == "!"){
        alert("Under maintenance")
    } else if (oper == "sqrt"){
        resultFS = Math.sqrt(readFS)
    }
    
    basicResult.innerText = resultBasic
    pwidResult.innerText = resultPWID
    fsResult.innerText = resultFS
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

readInput()

basicButton.addEventListener("click", operatorSelection)
pwidButton.addEventListener("click", operatorSelection)
fsButton.addEventListener("click", operatorSelection)

basicInput1.addEventListener("keyup", readInput)
basicInput2.addEventListener("keyup", readInput)
pwidInput1.addEventListener("keyup", readInput)
pwidInput2.addEventListener("keyup", readInput)
fsInput1.addEventListener("keyup", readInput)

basicEqual.addEventListener("click", operation)
pwidEqual.addEventListener("click", operation)
fsEqual.addEventListener("click", operation)

quotesGeneratorButton.addEventListener("click", quotesGen)