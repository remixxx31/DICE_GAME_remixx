//définition des classes
let game, player1, player2;
const diceBtn= document.querySelector("#dice-roll");
const newBtn= document.querySelector("#new-game");
const holdBtn= document.querySelector("#id-hold");
const rp1= document.querySelector("#roundPlayer1");
const rp2= document.querySelector("#roundPlayer2");
const playerTitle1 = document.querySelector("#player1");
const playerTitle2 = document.querySelector("#player2");
const scoreP1 = document.querySelector("#scoreplayer1");
const scoreP2 = document.querySelector("#scoreplayer2");


diceBtn.addEventListener('click',roll_dice)
newBtn.addEventListener('click',game_start)
holdBtn.addEventListener('click',hold)
// initialisation des classes
function game_start() {
  //initialisation des différentes classes
  console.log("nouvelle partie")
  game = {
    turn: get_random_int(0, 2),
    win: null,
    result: null,
  }
  
  player1 = {
    round:  null,
    global: null,
    result: null,
  }
  
  player2 = {
    round:  null,
    global: null,
    result: null,
  }
  console.dir(game)
  console.dir(player1)
  console.dir(player2)
  console.log("Cliquez sur roll-Dice")
}

// function indicate_turn(){
//   let bold1=playerTitle1.classList.add("fw-bold");
//   let notbold1=playerTitle1.classList.remove("fw-bold");
//   let bold2=playerTitle2.classList.add("fw-bold");
//   let notbold2=playerTitle2.classList.remove("fw-bold");

//   if(game.turn === 0 && game.result !== 1 ){
//    return bold1 && notbold2;
//   }else if(game.turn ===1 && game.result !== 1 ){
//     return bold2 && notbold1;
//     console.log("texte en gras c'est au joueur 2");
// } elseif(){

// }
// else{
//     alert("Cliquez sur New game");
//     console.log("ce n'est le tour de personne");
// }
// }
// function add_listener() {
//   const diceRoll = document.querySelector("#dice-roll");

//   diceRoll.addEventListener("click", console.log("ça marche"));
// }

// fonction qui me renvoit un nb aléatoire entre les bornes précisées
function get_random_int(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min
}

//fonction du lancer de dé
function roll_dice(){
  console.log("le dé est lancé")
  var result = get_random_int(1,7);
  // inscription du nombre obtenu dans le bon élèment
  document.querySelector('#affichage-dice').textContent = result;
  // console.log(game.turn)
  if(result !== 1){
    console.log("dé > 1")
    game.result= result;
    not_one();
  }else{
    console.log("dé = 1")
    game.result= result;
    is_one();
  }
  // indicate_turn()
  
}

//fonction résultat du dé à 1
function is_one() {
  if(game.turn === 0) {
    console.log("tour du joueur 1")
    player1.round = 0;
    console.log("score du joueur " + player1.round)
      document.querySelector('#roundPlayer1').textContent = player1.round;
      game.turn = 1;
  }else{
    console.log("tour du joueur 2")
      player2.round = 0;
      document.querySelector('#roundPlayer2').textContent = player2.round;
      game.turn = 0;
  }
}

//fonction résultat différent de 1
function not_one() {
  if(game.turn === 0) {
    console.log("le résulat est de: " + player1.result)
    player1.result= game.result;
    player1.round += player1.result;
    console.log("le résultat du joueur 1 se rajoute au round= " + player1.round);
    document.querySelector('#roundPlayer1').innerHTML = player1.round;
  }else{
    console.log("le résulat est de: " + player1.result)
    player2.result=game.result;
    player2.round += player2.result;
    console.log("le résultat du joueur 2 se rajoute au round= " + player2.round);
      document.querySelector('#roundPlayer2').textContent = player2.round;
  }
}

//fonction envoi du score sur score global
function hold() {
  console.log("envoi du score round!")
  // mess = console.log("C'est le" );
  if(game.turn === 0){
      player1.global+=player1.round;
      scoreP1.textContent = player1.global;
      console.log("Le score global du Joueur 1 est de" + player1.global);
      player1.round = 0;
      rp1.textContent =player1.round;
      if(is_victory(player1.global)){
        game.win = 0;
      }else{
        game.turn = 1;
      }
    }else{
      player2.global+=player2.round;
      scoreP2.textContent = player2.global;
      console.log("Le score global du Joueur 2 est de" + player2.global);
      player2.round = 0;
      rp2.textContent =player2.round;
      if(is_victory(player2.global)){
          game.win = 1;
      }else{
          game.turn = 0;
      }
  }
}


//fonction qui évalue si il y a un vainqueur
function is_victory(global){
  if(global >= 100){
      return true;
  } else {
      return false;
  }

}
