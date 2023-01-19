const buttons = document.querySelectorAll("#buttons ")
const upperScreen = document.querySelector("#upper-screen")
const lowerScreen = document.querySelector("#lower-screen")

let result = 0;

buttons.forEach(button => button.addEventListener("click", e=> addNumbers(e)))
buttons.forEach(button => button.addEventListener("click", e=> addOperator(e)))
buttons.forEach(button => button.addEventListener("click", e=> clear(e)))
buttons.forEach(button => button.addEventListener("click", e=> calculate(e)))
buttons.forEach(button => button.addEventListener("click", e=> addDecimal(e)))


function addNumbers(e){
    if (e.target.className!="number") return
    if (lowerScreen.innerText==="0") lowerScreen.innerText="" 
    lowerScreen.innerText+=e.target.innerText
}

function addOperator(e){
    if (e.target.className!="operator") return
    add(e)
    upperScreen.innerText= `${result} ${e.target.innerText}`
    lowerScreen.innerText= "0"
    console.log(result)
}

function addDecimal(e){
    if (e.target.id!="decimal") return
    if (lowerScreen.innerText.includes(".")) return
    lowerScreen.innerText+="."
}

function calculate(e){
    if (e.target.id!="equals") return
    if (upperScreen.innerText==="") return
    if (upperScreen.innerText==="")return
    upperScreen.innerText=`${upperScreen.innerText} ${lowerScreen.innerText} =`
}

function clear(e){
    if (e.target.id!="ac") return
    upperScreen.innerText=""
    lowerScreen.innerText="0"
    result = 0
}

function add(e){
    if (e.target.id!="0") return
    result += parseInt(lowerScreen.innerText)
}
