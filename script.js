/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var activePlayer,scores,roundScore,playing;
newGame();

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(playing){
        //Random number
        var dice = Math.floor(Math.random()*6)+1;

        //Display the number
        document.querySelector('#dice-1').style.display='inline-block';
        document.querySelector('#dice-1').src="images/Dice_"+dice+".png";
        
        // Update roundScore
        if (dice!==1){
            roundScore=roundScore+dice;
            document.querySelector('#current-' + activePlayer).textContent=roundScore;
        }
        else if (dice===1){
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
        if(playing){
            //hold round-global 
            scores[activePlayer] = scores[activePlayer]+roundScore;
            document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];
            
            if(scores[activePlayer] < 100)
                nextPlayer();
            
            else if (scores[activePlayer] >= 100){
                document.querySelector('#current-' + activePlayer).textContent=0;
                document.querySelector('#name-'+activePlayer).textContent='WINNER!';
                document.querySelector('.new-'+activePlayer).classList.remove('active');
                document.querySelector('#name-'+activePlayer).classList.add('winner');
                document.querySelector('#dice-1').style.display='none';
                playing=false;   
            }
        }
});

document.querySelector('.btn-new').addEventListener('click', newGame);

function newGame(){
    // Button New Game
    activePlayer = 0;
    scores=[0,0];
    roundScore=0;
    playing=true;
    document.querySelector('#dice-1').style.display='none';
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;
    document.querySelector('#score-0').textContent=0;
    document.querySelector('#score-1').textContent=0;
    document.querySelector('.new-0').classList.add('active');
    document.querySelector('.new-1').classList.remove('active');
    document.querySelector('#name-0').textContent='Player 1';
    document.querySelector('#name-1').textContent='Player 2';
    document.querySelector('#name-0').classList.remove('winner');
    document.querySelector('#name-1').classList.remove('winner');
}

function nextPlayer(){
    document.querySelector('#current-' + activePlayer).textContent=0;
    roundScore=0;
    activePlayer===0 ? activePlayer=1 : activePlayer=0;
    document.querySelector('.new-0').classList.toggle('active');
    document.querySelector('.new-1').classList.toggle('active');
    document.querySelector('#dice-1').style.display='none';
}  



/*
Version 1:
The earlier rules apply. Aslo a player looses his entire score when he rolls two six in a row. After that it's the next players turn.
*/

/*  var activePlayer,scores,roundScore,playing,roll_1;
newGame();

var i=0;
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(playing){
        //Random number
        i++;
        if(i==1){
            var dice_1 = Math.floor(Math.random()*6)+1;
            roll_1 = dice_1;
            btnRoll(dice_1);
        }

        if(i===2){
            var dice = Math.floor(Math.random()*6)+1;
            i=0;
            if(roll_1==6 && dice==6){
                document.querySelector('#current-'+activePlayer).textContent=0;
                document.querySelector('#score-'+activePlayer).textContent=0;
                nextPlayer();
            }
            else
                btnRoll(dice);
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(playing){
        //hold round-global 
        scores[activePlayer] = scores[activePlayer]+roundScore;
        document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];
        
        if(scores[activePlayer] < 100)
            nextPlayer();
        
        else if (scores[activePlayer] >= 100){
            document.querySelector('#current-' + activePlayer).textContent=0;
            document.querySelector('#name-'+activePlayer).textContent='WINNER!';
            document.querySelector('.new-'+activePlayer).classList.remove('active');
            document.querySelector('#name-'+activePlayer).classList.add('winner');
            document.querySelector('#dice-1').style.display='none';
            playing=false;   
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', newGame);

function newGame(){
    // Button New Game
    activePlayer = 0;
    scores=[0,0];
    roundScore=0;
    playing=true;
    document.querySelector('#dice-1').style.display='none';
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;
    document.querySelector('#score-0').textContent=0;
    document.querySelector('#score-1').textContent=0;
    document.querySelector('.new-0').classList.add('active');
    document.querySelector('.new-1').classList.remove('active');
    document.querySelector('#name-0').textContent='Player 1';
    document.querySelector('#name-1').textContent='Player 2';
    document.querySelector('#name-0').classList.remove('winner');
    document.querySelector('#name-1').classList.remove('winner');
}

function nextPlayer(){
    document.querySelector('#current-' + activePlayer).textContent=0;
    roundScore=0;
    activePlayer===0 ? activePlayer=1 : activePlayer=0;
    document.querySelector('.new-0').classList.toggle('active');
    document.querySelector('.new-1').classList.toggle('active');
    document.querySelector('#dice-1').style.display='none';
}

function btnRoll(d){
    //Display the number
    document.querySelector('#dice-1').style.display='inline-block';
    document.querySelector('#dice-1').src="images/Dice_"+d+".png";

    //Update round score
        if (dice!==1){
            roundScore=roundScore+dice;
            document.querySelector('#current-' + activePlayer).textContent=roundScore;
        }
        else if (dice===1){
            nextPlayer();
        }
}   */



/*
Version 2:
The rules of the initial game still apply. Also add an input feild to the HTML where players can set the winning score, so that they can change the predefined score of 100. 
*/

/*  var activePlayer,scores,roundScore,playing,bar;
newGame();

var i=0;
function getInputValue(){
    bar = document.getElementById('bar').value;
    if(i==0){
        playing=true;
        i++;
    }
}

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(playing){
        //Random number
        var dice = Math.floor(Math.random()*6)+1;

        //Display the number
        document.querySelector('#dice-1').style.display='inline-block';
        document.querySelector('#dice-1').src="images/Dice_"+dice+".png";
        
        // Update roundScore
        if (dice!==1){
            roundScore=roundScore+dice;
            document.querySelector('#current-' + activePlayer).textContent=roundScore;
        }
        else if (dice===1){
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
        if(playing){
            //hold round-global 
            scores[activePlayer] = scores[activePlayer]+roundScore;
            document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];
            
            if(scores[activePlayer] < bar)
                nextPlayer();
            
            else if (scores[activePlayer] >= bar){
                document.querySelector('#current-' + activePlayer).textContent=0;
                document.querySelector('#name-'+activePlayer).textContent='WINNER!';
                document.querySelector('.new-'+activePlayer).classList.remove('active');
                document.querySelector('#name-'+activePlayer).classList.add('winner');
                document.querySelector('#dice-1').style.display='none';
                playing=false;   
            }
        }
});

document.querySelector('.btn-new').addEventListener('click', newGame);

function newGame(){
    // Button New Game
    activePlayer = 0;
    scores=[0,0];
    roundScore=0;
    i=0;
    playing=false;
    document.querySelector('#dice-1').style.display='none';
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;
    document.querySelector('#score-0').textContent=0;
    document.querySelector('#score-1').textContent=0;
    document.querySelector('.new-0').classList.add('active');
    document.querySelector('.new-1').classList.remove('active');
    document.querySelector('#name-0').textContent='Player 1';
    document.querySelector('#name-1').textContent='Player 2';
    document.querySelector('#name-0').classList.remove('winner');
    document.querySelector('#name-1').classList.remove('winner');
}

function nextPlayer(){
    document.querySelector('#current-' + activePlayer).textContent=0;
    roundScore=0;
    activePlayer===0 ? activePlayer=1 : activePlayer=0;
    document.querySelector('.new-0').classList.toggle('active');
    document.querySelector('.new-1').classList.toggle('active');
    document.querySelector('#dice-1').style.display='none';
}   */



/*
Version 3:
The rules of the initial game still apply. Also add another dice to the game, so that there are two dices now. The player looses his current score when any one of them rolls 1. 
*/

/*  var activePlayer,scores,roundScore,playing;
newGame();

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(playing){
        //Random number
        var dice_1 = Math.floor(Math.random()*6)+1;
        var dice_2 = Math.floor(Math.random()*6)+1;

        //Display the number
        document.querySelector('#dice-1').style.display='inline-block';
        document.querySelector('#dice-2').style.display='inline-block';
        document.querySelector('#dice-1').src="images/Dice_"+dice_1+".png";
        document.querySelector('#dice-2').src="images/Dice_"+dice_2+".png";
        
        // Update roundScore
        if (dice_1!==1 && dice_2!==1){
            roundScore=roundScore+dice_1+dice_2;
            document.querySelector('#current-' + activePlayer).textContent=roundScore;
        }
        else
            nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(playing){
        //hold round-global 
        scores[activePlayer] = scores[activePlayer]+roundScore;
        document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];
        
        if(scores[activePlayer] < 100)
            nextPlayer();
        
        else if (scores[activePlayer] >= 100){
            document.querySelector('#current-' + activePlayer).textContent=0;
            document.querySelector('#name-'+activePlayer).textContent='WINNER!';
            document.querySelector('.new-'+activePlayer).classList.remove('active');
            document.querySelector('#name-'+activePlayer).classList.add('winner');
            document.querySelector('#dice-1').style.display='none';
            document.querySelector('#dice-2').style.display='none';
            playing=false;   
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', newGame);

function newGame(){
// Button New Game
activePlayer = 0;
scores=[0,0];
roundScore=0;
playing=true;
document.querySelector('#dice-1').style.display='none';
document.querySelector('#dice-2').style.display='none';
document.querySelector('#current-0').textContent=0;
document.querySelector('#current-1').textContent=0;
document.querySelector('#score-0').textContent=0;
document.querySelector('#score-1').textContent=0;
document.querySelector('.new-0').classList.add('active');
document.querySelector('.new-1').classList.remove('active');
document.querySelector('#name-0').textContent='Player 1';
document.querySelector('#name-1').textContent='Player 2';
document.querySelector('#name-0').classList.remove('winner');
document.querySelector('#name-1').classList.remove('winner');
}

function nextPlayer(){
document.querySelector('#current-' + activePlayer).textContent=0;
roundScore=0;
activePlayer===0 ? activePlayer=1 : activePlayer=0;
document.querySelector('.new-0').classList.toggle('active');
document.querySelector('.new-1').classList.toggle('active');
document.querySelector('#dice-1').style.display='none';
document.querySelector('#dice-2').style.display='none';
}   */