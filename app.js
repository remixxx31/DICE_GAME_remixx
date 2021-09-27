// fonction qui me renvoit un nb aléatoire sur les bornes précisées
function get_random_int(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min
}

let game;

let player1;

let player2;

function game_start() {
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

// let round=null ;

// function result_Dice(result){
//   // result = null;
//   result= getRandomInt(1,7);
//   if(result != 1){
//     round+=result;
    
//     console.log(
//       `Votre lancer de dé est de : ${result},
//       Votre round est de: ${round},
//       continuez ou envoyer vos points sur le score global !
      
//       `);
//       // round += result;
//       // console.log(round);
      
//     }else{
//       round = 0;
//       console.log(
//         `Votre lancer de dé est de : 1,
//         vous perdez les points du round et c'est à votre adversaire!
        
//         `);
//       }
      
//     }
    
// let getRound =(result_Dice())+round;
// console.log(getRound);   
result_Dice();
result_Dice();
result_Dice();
