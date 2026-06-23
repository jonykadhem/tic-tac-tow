/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let currentPlayer = 'X'
let gameActive = true
let winner = ''
/*------------------------ Cached Element References ------------------------*/
const board = document.querySelector('#board')
const sqr = document.querySelectorAll('.sqr')
const resetBtn = document.querySelector('#reset-btn')
const message = document.querySelector('#message')

const toWin = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]]
/*----------------------------- Event Listeners -----------------------------*/
sqr.forEach(function (cell) {
    cell.addEventListener('click', function () {
        if (cell.textContent !== '' || !gameActive) {
            return
        }
        if (checkWin(currentPlayer)) {
            message.textContent = `Player ${currentPlayer} is the winner 🎉🎉`
            // gameActive = false
            return
        }
        if (checkTie) {
            message.textContent = 'Game is tie 🤝'
        }
        if (currentPlayer === 'X') {
            cell.textContent = 'x'
            currentPlayer = 'o'
            message.textContent = 'Player O turn'
        } else {
            cell.textContent = 'o'
            currentPlayer = 'X'
            message.textContent = 'Player X turn'
        }
        
        

    })
})



sqr.forEach(function (cell) {
    resetBtn.addEventListener('click', function () {
        cell.textContent = ''
        cell.classList.remove('x')
        cell.classList.remove('o')
    })

})

/*-------------------------------- Functions --------------------------------*/
checkWin
function checkWin() {
    for (i = 0; i < toWin.length; i++) {
        const [a, b, c] = toWin[i]
        if (sqr[a].textContent === currentPlayer &&
            sqr[b].textContent === currentPlayer &&
            sqr[c].textContent === currentPlayer 
        ){
            return true
        }

    }
    return false
    // if (sqr[0].textContent === currentPlayer &&
    //     sqr[1].textContent === currentPlayer &&
    //     sqr[2].textContent === currentPlayer
    // ) {
    //     return true
    // } if (sqr[3].textContent === currentPlayer &&
    //     sqr[4].textContent === currentPlayer &&
    //     sqr[5].textContent === currentPlayer
    // ) {
    //     return true
    // } if (sqr[6].textContent === currentPlayer &&
    //     sqr[7].textContent === currentPlayer &&
    //     sqr[8].textContent === currentPlayer
    // ) {
    //     return true
    // } if (sqr[0].textContent === currentPlayer &&
    //     sqr[4].textContent === currentPlayer &&
    //     sqr[8].textContent === currentPlayer
    // ) {
    //     return true
    // } if (sqr[2].textContent === currentPlayer &&
    //     sqr[4].textContent === currentPlayer &&
    //     sqr[6].textContent === currentPlayer
    // ) {
    //     return true
    // } if (sqr[0].textContent === currentPlayer &&
    //     sqr[3].textContent === currentPlayer &&
    //     sqr[6].textContent === currentPlayer
    // ) {
    //     return true
    // } if (sqr[1].textContent === currentPlayer &&
    //     sqr[4].textContent === currentPlayer &&
    //     sqr[7].textContent === currentPlayer
    // ) {
    //     return true
    // } if (sqr[2].textContent === currentPlayer &&
    //     sqr[5].textContent === currentPlayer &&
    //     sqr[8].textContent === currentPlayer
    // ) {
    //     return true

    // }

    // }else {
    //     message.textContent = 'its a tie'
    // }

}
function checkTie(){
    for(let i = 0; i < squares.length; i++) {
        if(squares[i].textContent === '') {
            return false;
        }
    }
    return true
}
