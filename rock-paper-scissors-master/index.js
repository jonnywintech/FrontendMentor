const rulesBtn = document.querySelector(".rules__btn");
const hands = document.querySelectorAll(".buttons__button");
const highscore = document.querySelector(".score__number");
highscore.innerText=0;
const closeRules = document.querySelector(".rules__close");
const rulesBox = document.querySelector(".rules__box");
const draw = document.querySelector(".rules__text");
const gameOver = document.querySelector(".score__message");
let score = 0;

// open and close rules__close


rulesBtn.addEventListener("click",()=>{
 rulesBox.classList.toggle("hide");
})
// close rulesBtn
closeRules.addEventListener('click',()=>{
    rulesBox.classList.toggle("hide");
})

///// dont touch


//randomNumber

const random = function randomNumber(){
  return   Math.floor(Math.random()*3);
}

// cpuNum = random()
// console.log(random());

function cpuHighlightReset(){
    for(hand of hands){
        hand.classList.remove("buttons__button--active");
    }
}



/// looop over hands
hands.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        const cpuNum = random();
       
        //  reset highlight for cpu choice
        cpuHighlightReset();
        //  highlight cpu choice
        hands[cpuNum].classList.add("buttons__button--active");

        //events that happen in case you win
        function winCase(){
            draw.innerText="";
            gameOver.innerText="";
            score++;
            highscore.innerText=score;
        }
        //events that happen in case you loose
        function looseCase(){
            gameOver.innerText="Game Over";
            score = 0;
            highscore.innerText=score;
        }
    
        
        if(index === cpuNum){
            draw.innerText="draw";
            gameOver.innerText="";
        }else if(index === 0 && cpuNum ===2){
            looseCase();
            
        }else if(index === 0 && cpuNum ===1){
            winCase();
        
        }else if(index === 1 && cpuNum ===0){
           looseCase();
        
        }else if(index === 1 && cpuNum ===2){
            winCase();
        
        }else if(index === 2 && cpuNum ===0){
            winCase();
        
        }else if(index === 2 && cpuNum ===1){
            looseCase();
        } else{
            console.log("error")
        }

    })
})
