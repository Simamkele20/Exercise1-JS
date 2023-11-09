const btnAdd = document.querySelector("[data-submit]")
const lblOutput = document.querySelector("#Output")

function Addition(){
    let numb1 = document.getElementById ("Fist").value
    let numb2 =  document.getElementById ("Second").value
    let sum = +numb1 + +numb2
    lblOutput.textContent = sum
}


btnAdd.addEventListener("click", Addition)