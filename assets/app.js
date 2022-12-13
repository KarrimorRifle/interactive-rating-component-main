let form = document.querySelector("#rating-form");
let inputs = document.querySelectorAll("input[type=\"radio\"]");
let screen1 = document.querySelector("#screen-1");
let screen2 = document.querySelector("#screen-2");
let ratingOutput = document.querySelector('#rating-output');

form.addEventListener('submit', e =>{
    e.preventDefault();
    for(i = 0; i < inputs.length; i++){
        if(inputs[i].checked){
            ratingOutput.textContent = inputs[i].value;
        }
    }
    screen1.style.display = "none";
    screen2.style.display = "flex"
})
form.addEventListener('click', e =>{
    if(e.target.value != undefined){
        console.log(e.target.value);
        inputs.forEach((input) => {
            if(input.value < e.target.value){
                input.classList.add("active");
            }else{
                input.classList.remove("active");
            }
        })
    }
})