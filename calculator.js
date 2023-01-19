const buttons = document.querySelectorAll("#buttons ")
const upperScreen = document.querySelector("#upper-screen")
const lowerScreen = document.querySelector("#lower-screen")

let result= null
let finalResult = NaN

function calculateArray(array){
    array.forEach(number=>console.log(array.indexOf(number)))
}


buttons.forEach(button => button.addEventListener("click", e=> numberButtons(e)))
buttons.forEach(button => button.addEventListener("click", e=> decimalButton(e)))
buttons.forEach(button => button.addEventListener("click", e=> clearButton(e)))
buttons.forEach(button => button.addEventListener("click", e=> operatorButtons(e)))
buttons.forEach(button => button.addEventListener("click", e=> equalsButton(e)))


function numberButtons(e){
    if (e.target.className!="number") return
    if (lowerScreen.innerText==="0") lowerScreen.innerText="" 
    lowerScreen.innerText+=e.target.innerText
}

function decimalButton(e){
    if (e.target.id!="decimal") return
    if (lowerScreen.innerText.includes(".")) return
    lowerScreen.innerText+="."
}

function clearButton(e){
    if (e.target.id!="ac") return
    upperScreen.innerText=""
    lowerScreen.innerText="0"
    result = 0
    finalResult=NaN
}

function operatorButtons(e){
    if (e.target.className!="operator") return 
    updateResult()
    calculate()
    if (isNaN(finalResult)){
        upperScreen.innerText = `${lowerScreen.innerText} ${e.target.innerText}` 
    } else{
    upperScreen.innerText = `${finalResult} ${e.target.innerText}`
    }
    lowerScreen.innerText=0
}

function equalsButton(e){
    if (upperScreen.innerText.includes("=")) return
    if (e.target.id!="equals") return 
    updateResult()
    calculate()
    upperScreen.innerText= `${result[0]} ${upperScreen.innerText.at(-1)} ${lowerScreen.innerText} =`
    lowerScreen.innerText=`${finalResult}`
}

function updateResult(){
    result=[parseFloat(upperScreen.innerText.slice(0,-1)),parseFloat(lowerScreen.innerText)]
}

function checkOperator(){
    let checkOperator = upperScreen.innerText.at(-1)
    return checkOperator
}

function calculate(){
    switch(checkOperator()){
        case "+": finalResult=result[0]+result[1]; break; 
        case "-": finalResult=result[0]-result[1]; break;
        case "x": finalResult=result[0]*result[1]; break;
        case "÷": finalResult=result[0]/result[1]; break;
    }  
}

