const inputTag = document.querySelector('input[name="price"]')
const outputTag = document.querySelector('.pricer')
const pageviewerTag = document.querySelector('.pageviewer')
const switcher = document.querySelector('.switch-area')
const checkerAreaTag = document.querySelector('.checker-area')
const checkerBall = document.querySelector('.checker-ball')
const discountTag = document.querySelector('.discount')
let isToggleOn = false
let value = 16
let discount = 1.25


outputTag.innerHTML = value;


switcher.addEventListener('click', event => {
    checkerBall.classList.toggle('checker-ball-new')
    checkerAreaTag.classList.toggle('checker-area-clicked')
    discountTag.classList.toggle('discount-clicked')
    isToggleOn = !isToggleOn    


    if (isToggleOn === true) {
        outputTag.innerHTML = discountFunction(value);  
    } else if (isToggleOn === false) {      
        outputTag.innerHTML = value; 
    }
})



inputTag.addEventListener('input', event => {

    const inputValue = event.target.value

    value = inputValue

    outputTag.innerHTML = inputValue;

    if (inputValue >= 8 &&  inputValue < 12) {
        pageviewerTag.innerHTML = 10 + "K"
        
        
    } else if (inputValue >= 12 && inputValue < 16) {
        pageviewerTag.innerHTML = 50 + "K"
        

    } else if (inputValue >= 16 && inputValue < 24) {
        pageviewerTag.innerHTML =   100 + "K"
              
    } else if (inputValue >= 24 && inputValue < 32) {
        pageviewerTag.innerHTML =   500 + "K"
              
    } else if (inputValue >= 32) {
        pageviewerTag.innerHTML =  1 + "M"
            
    }  

    if (isToggleOn === true) {
        outputTag.innerHTML = discountFunction(inputValue);
    } else {
        outputTag.innerHTML = inputValue
    }
})



const discountFunction = n => {
    return Math.round(n / discount)
}
