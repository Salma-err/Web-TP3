let fahr = document.querySelector('#fah') 
let cels = document.querySelector('#cel') 
let compF = document.querySelector('.inp.f');
let compC = document.querySelector('.c');

function FahrTrans(e){ 
    if(isNaN(fahr.value) && fahr.value != null){ 
        compF.style.backgroundColor = "red" 
    }
    else{
        if(fahr.value == ''){
            compF.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
            cels.value = null 
        }
        else{
            compF.style.backgroundColor = "rgba(255, 255, 255, 0.1)" 
            let F = fahr.value 
            cels.value = (F - 32) * 5/9
        } 
    }
} 
function CelsTrans(e){
    if(isNaN(cels.value) && cels.value != null){ 
        compC.style.backgroundColor = "red" 
    }
    else{
        if(cels.value == ''){
            compC.style.backgroundColor = "rgba(255, 255, 255, 0.1)" 
            fahr.value = null
        }
        else{ 
            compC.style.backgroundColor = "rgba(255, 255, 255, 0.1)" 
            let C = cels.value 
            fahr.value = 32 + C * 9/5 
        }
    }
} 

fahr.addEventListener("input",FahrTrans,true) 
cels.addEventListener("input",CelsTrans,true) 
