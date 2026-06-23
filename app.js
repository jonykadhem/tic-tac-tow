/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let currentPlayer = 'X'
let gameActive = true
/*------------------------ Cached Element References ------------------------*/
const board = document.querySelector('#board')
const sqr = document.querySelectorAll('.sqr')
const resetBtn = document.querySelector('reset-btn')

const toWin = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]
/*----------------------------- Event Listeners -----------------------------*/
sqr.forEach(function (cell) {
    cell.addEventListener('click', function () {
       if(currentPlayer === 'X'){
           cell.textContent='x'
           currentPlayer = 'o'
       }else{
        cell.textContent = 'o'
        currentPlayer = 'X'
       }

    })
})
resetBtn.addEventListener('click', function (event) {
    sqr.target.remove()
})
/*-------------------------------- Functions --------------------------------*/

// function onClick(event) {
//     const cell = event.target()
//     if (cell.textContent !== '' || !gameActive) {
//         return
//     }

//     cell.textContent = currentPlayer
//     if (currentPlayer === 'X') {
//         cell.
//     } else {
//         cell.classList.add('o')
        
//     }
// }