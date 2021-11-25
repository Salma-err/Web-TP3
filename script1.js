let container = document.querySelector("#container")
let circ = document.querySelector("#circle")

function Update(e){
    let x=e.clientX-container.offsetLeft;
    let y=e.clientY-container.offsetTop;
    circ.style.left = (x-30) + 'px';
    circ.style.top = (y-30) + 'px';
}
function Col(e){
    circ.style.borderColor = 'green'
}
function Uncol(e){
    circ.style.borderColor = 'red'
}
function Displ(e){
    if(getComputedStyle(circ).display == "block"){
        circ.style.display = "none";
    }else{
        circ.style.display = "block";
    }  
}
container.addEventListener('mousemove', Update,true)
container.addEventListener('mouseenter', Col,true)
container.addEventListener('mouseleave', Uncol,true)
container.addEventListener('click',Displ ,true)