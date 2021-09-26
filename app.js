// fonction qui me renvoit un nb aléatoire sur les bornes précisées
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min
}

// let buttonDice = getElementById('dice-Roll');

function result_Dice(result){
  let round = 0;
  // result = null;
  do{
    result= getRandomInt(1,7);
    round += result;
    if(result != 1){
    console.log(
    `Votre lancer de dé est de : ${result},
      Votre round est de: ${round},
      continuez ou envoyer vos points sur le score global !
    
    `);
    // break;
  }else{
    round = 0;
      console.log(
        `Votre lancer de dé est de : ${result},
        vous perdez les points du round et c'est à votre adversaire!
      
        `);
    }
  } while (result != 1);
}



result_Dice();