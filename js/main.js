let rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const choice = document.querySelectorAll('.choice')
const playerName = document.querySelector('.playerName')
let comscore = document.querySelector('.comscore')
let humscore = document.querySelector('.humscore')
const win = document.querySelector('.win')
let computerScore = 0
let humanScore = 0

// get player name
let player = prompt('Enter your name: ')
playerName.innerHTML = `${player}!`

// get playerChoice
choice.forEach((ch) => {
  ch.addEventListener('click', () => {
    playerChoice = ch.id
    let computer = getComputerChoice()

    if (playerChoice === computer) {
      win.innerHTML = `It's a tie!!!!!!!!!!!!!!!`
    } else if (playerChoice == 'rock' && computer == 'scissors') {
      humanScore++
      humscore.innerHTML = Number(humanScore)
      win.innerHTML = `you win`
    } else if (playerChoice == 'paper' && computer == 'rock') {
      humanScore++
      humscore.innerHTML = Number(humanScore)
      win.innerHTML = `you win`
    } else if (playerChoice == 'scissors' && computer == 'paper') {
      humanScore++
      humscore.innerHTML = Number(humanScore)
      win.innerHTML = `you win`
    } else {
      computerScore++
      comscore.innerHTML = Number(computerScore)
      win.innerHTML = 'computer wins'
    }

    // show stats
    let stat = document.querySelector('.stat')
    stat.innerHTML = `${player}: ${playerChoice} <br> Computer: ${computer}`
  })
})

// Create a function named getComputerchoice
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1
  if (computerChoice == 1) {
    return 'rock'
  } else if (computerChoice == 2) {
    return 'paper'
  } else {
    return 'scissors'
  }
}

// Work on gaame over
// if (computerScore || humanScore == 5) {
//   win.innerHTML = 'Game Over!!!!!!!!!!!!!!'
// }
