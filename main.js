const player1 = document.querySelector('.player1')
const player2 = document.querySelector('.player2')
const select = document.querySelector('.select')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const reset = document.querySelector('.reset')

console.log(typeof select.value);

let  score1 = 0;
let  score2 = 0;
let GameLevel = select.value;
let GameOver = true;

btn1.addEventListener("click", ()=>{
      score1++;
      if(GameOver){
            if(score1 == GameLevel){
                  GameOver = false;
                  player1.style.color = 'lime'
                  player2.style.color = 'crimson'
            }
            player1.textContent = score1
      }
});

btn2.addEventListener("click", ()=>{
      score2++
      if(GameOver){
            if(score2 == GameLevel){
            GameOver = false
            player1.style.color = 'crimson'
            player2.style.color = 'lime'
            }
            player2.textContent = score2
      }
});

select.addEventListener('change', refresh)

reset.addEventListener('click', refresh)

function refresh(){
      player1.textContent = 0;
      player2.textContent = 0;
      player1.style.color = 'black';
      player2.style.color = 'black';
      GameOver = true
      score1 = 0;
      score2 = 0;
      GameLevel = select.value
}