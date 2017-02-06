function playGuess2 (){
    
var answer = parseInt(Math.random()*100);
    var playerNum =1;
    
    while (true) {
      var userAnswer = prompt("игрок "+ playerNum + ", введите число от 0 до 100, для выхода из игры нажмите q");
        if (userAnswer == "q"||userAnswer == "й") {
            break;
        }
    userAnswer = parseInt(userAnswer);
        
    if (userAnswer > answer){
        alert ("Введенное число игроком " + playerNum + " больше чем загаданное");
        
    } else if (userAnswer < answer){
        alert ("Введенное число игроком " + playerNum + " меньше чем загаданное");
    }
    else if (userAnswer == answer){
        alert ("Игрок "+ playerNum + " угадал число! Поздравляем! ");
        break;
    }     else {
         alert("Необходимо вввести число");
     }  
        
     if (playerNum == 1 ) {
         playerNum = 2 ;
     } else {
         playerNum =1;
     } 
    } 
}
 var correctAnswersCount = 0;
   
 
function askQuestion(textBoxId,answer) {
    var userAnswer = document.getElementById(textBoxId).value;
        if (userAnswer == answer) {
            correctAnswersCount++;
        }
}
function playpuzzle(){
    correctAnswersCount = 0;
    askQuestion("userAnswer1","доллар");
    askQuestion("userAnswer2","рубль");
    alert("Правильных ответов: " + correctAnswersCount);
    
}

function playGuess1 (){
    
    	var answer = parseInt(Math.random()*100);
    var counter =0;
    while (true) {
        counter++;
      var userAnswer = prompt("введите число от 0 до 100:");
        if (userAnswer == "q") {
            break;
        }
    userAnswer = parseInt(userAnswer);
        
    if (userAnswer > answer){
        alert ("Введенное число больше чем загаданное");
        
    } else if (userAnswer < answer){
        alert ("Введенное число меньше чем загаданное");
    }
    else if (userAnswer == answer){
        alert ("Вы угадали число! Поздравляем! вы угадали за "+ counter+" попыток");
        break;
    }     else {
         alert("Необходимо вввести число");
     }   
    } 
}