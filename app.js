//définition des classes
let game;

let player1;

let player2;

// initialisation des classes
function game_start() {
  //initialisation des différentes classes
  game = {
    turn: get_random_int(0, 2),
    win: null,
  }
  
  player1 = {
    round: null,
    global: null,
    result: null,
  }
  
  player2 = {
    round: null,
    global: null,
    result: null,
  }
}

function add_listener() {
  const diceRoll = document.querySelector("#dice-roll");
  diceRoll.addEventListener("click", roll_dice);
}

// fonction qui me renvoit un nb aléatoire entre les bornes précisées
function get_random_int(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min
}

//fonction du lancer de dé
function roll_dice () {
  console.log("ok")
  result = get_random_int(1,7);
  if(result != 1){
      notOne();
  }else{
      isOne();
  }
}

//fonction résultat du dé à 1
function is_one () {
  if(game.turn === 0) {
      player1.round = 0;
      game.turn = 1;
  }else{
      player2.round = 0;
      game.turn = 0;
  }
}

//fonction résultat différent de 1
function not_one() {
  if(game.turn === 0) {
      player1.round = round+=result;
  }else{
      player2.round = round+=result;
  }
}

//fonction envoi du score sur score global
function hold () {
  if(game.turn === 0) {
      player1.global+=player1.round;
      if(is_victory(player1.global)){
          game.win = 0;
      }else{
          game.turn = 1;
      }
  }else{
      player2.global+=player2.round;
      if(is_victory(player2.global)){
          game.win = 1;
      }else{
          game.turn = 0;
      }
  }
}


//fonction qui évalue si il ya un vainqueur
function is_victory(global) {
  if(global >= 100){
      return true;
  }else{
      return false;
  }
}

game_start();  
   

