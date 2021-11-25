
let container = document.querySelector(".container")

let nouveau = document.querySelector('#nouv')
let lance = document.querySelector('#lanc')
let passe = document.querySelector('#pass')

let cube = document.querySelector('#cube')

let score1 = document.querySelector('#SC1')
let score2 = document.querySelector('#SC2')

let som1 = document.querySelector('#SM1')
let som2 = document.querySelector('#SM2')

let ping1 = document.querySelector("#ping1")
let ping2 = document.querySelector("#ping2")

let lanceur = 1;
const SCORE_MAX = 100;

score1.value = score2.value = 0;
som1.value = som2.value = 0;

//création de la bande de vainqueur
let band = document.createElement("div")
band.classList.add("band");


nouveau.addEventListener('click', NouveauJeu, true)
lance.addEventListener('click', LanceDe, true)
pass.addEventListener('click', PasseMain, true)

function NouveauJeu(e){
    cube.src = "images/cube1.png";
    score1.value = score2.value = 0;
    som1.value = som2.value = 0;
    lanceur = 1
    document.body.removeChild(band)
}

function LanceDe(e){
    let nb = Math.floor((Math.random()*6)+1)
    if(score1.value >= SCORE_MAX){
        console.log("le vainqueur est : joueur1")
        let text = document.createTextNode("Félicitations au JOUEUR n°1 d'avoir gagné cette tournoi")
        band.appendChild(text);
        document.body.appendChild(band);
    }
    else{
        if(score2.value >= SCORE_MAX){
            console.log("le vainqueur est : joueur2")
            let text = document.createTextNode("Félicitations au JOUEUR n°2 d'avoir gagné cette tournoi")
            band.appendChild(text);
            document.body.appendChild(band);
        }
        else{
            if(lanceur == 1){
                console.log('enter lancuer:',lanceur)
                switch(nb){
                    case 1: cube.src = "images/cube1.png"; break
                    case 2: cube.src = "images/cube2.png"; break
                    case 3: cube.src = "images/cube3.png"; break
                    case 4: cube.src = "images/cube4.png"; break
                    case 5: cube.src = "images/cube5.png"; break
                    case 6: cube.src = "images/cube6.png"; break
                }
                som1.value = Number(som1.value) + nb;
                console.log('fin som1:',som1.value)
            }
            else{
                console.log('enter lancuer:',lanceur)
                switch(nb){
                    case 1: cube.src = "images/cube1.png"; break
                    case 2: cube.src = "images/cube2.png"; break
                    case 3: cube.src = "images/cube3.png"; break
                    case 4: cube.src = "images/cube4.png"; break
                    case 5: cube.src = "images/cube5.png"; break
                    case 6: cube.src = "images/cube6.png"; break
                }
                som2.value = Number(som2.value) + nb;
                console.log('fin som2:',som2.value)
            }
        }
    } 
}

function PasseMain(e){
        if(lanceur == 1){
            if(!som1.value.includes(1)){
                score1.value = Number(score1.value) + Number(som1.value);
            }
            som1.value = 0
            lanceur = 2;
            container.style.background = "linear-gradient(to left ,  rgb(243, 243, 243) 50%, #fff 50%)"
            ping1.src = "images/pinguin.png"
            ping2.src = "images/pinguin1.png"
        }
        else{
            if(!som2.value.includes(1)){
                score2.value = Number(score2.value) + Number(som2.value);
            }
            som2.value = 0
            lanceur = 1;
            container.style.background = "linear-gradient(to left , #fff 50%, rgb(243, 243, 243) 50%)"
            ping2.src = "images/pinguin.png"
            ping1.src = "images/pinguin1.png"
        }
}