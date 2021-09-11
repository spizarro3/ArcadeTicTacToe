const boxes = document.querySelector('.board')
const button = document.getElementById('restart')
const cell = document.getElementsByClassName('cell')
const msg = document.getElementById('msg')

const player1 = 'X';
const player2 = 'O';
let turns = 1;

var board = [
    null, null, null,
    null, null, null,
    null, null, null 
    ]


document.addEventListener("DOMContentLoaded", function() {
    // grab board
   
    let boardT = document.getElementsByClassName('cell') // refer to row
    for (let i = 0; i< boardT.length; i++) {


        boardT[i].addEventListener("click", function(event) {
            if (turns == 1){
                event.target.innerText = player1
                board[i] = player1
                turns = 0             
            } else {
                event.target.innerText = player2;
                board[i] = player2
                turns = 1       
            }
            checkWin()
        })
    } 
})

function checkWin (){
let whosTurn = ''
    if (turns == 0) {
        whosTurn = 'X is the winner'
    } else {
        whosTurn = 'O is the winner'
    }
    // checking rows
    for (let i = 0; i < board.length; i+=3){
        if (board[i] == board[i+1] && board[i] != null){
            if (board[i+1] == board[i+2]){
                alert(whosTurn)  
            }
        }
    }
    // checking columns
    for (let i = 0; i <= 2; i++){
        if (board[i] == board[i+3] && board[i] != null){
            if (board[i+3] == board[i+6]){
                alert(whosTurn)
                
            }
        }
    }
    if (board[0] == board[4] && board[4] != null) {
        if (board[4] == board[8]) {
            alert(whosTurn)
        }
    }
    if (board[2] == board[4] && board[4] != null) {
        if (board[4] == board[6]) {
            alert(whosTurn)
        }
    }
}


function message() {
    alert("New Game")

    }

button.addEventListener('click', function(){
    let boardT = document.getElementsByClassName('cell')
        for (let i = 0; i< boardT.length; i++) {
    boardT[i].innerText = ' '
  
        }
        board = [
            null, null, null,
            null, null, null,
            null, null, null 
            ]
           message()
}) 