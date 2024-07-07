let rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const choice = document.querySelectorAll('.choice')
const win = document.querySelector('.win')
const play = document.querySelector('.play')
const option = document.querySelector('.option')
let computerScore = 0
let humanScore = 0

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

// getComputerChoice()

// Get player choice
play.addEventListener('click', () => {
  let computer = getComputerChoice()

  if (option.value === computer) {
    console.log(`It's a tie!!!!!!!!!!!!!!!`)
  } else if (option.value == 'rock' && computer == 'scissors') {
    console.log(`you win`)
  } else if (option.value == 'paper' && computer == 'rock') {
    console.log(`you win`)
  } else if (option.value == 'scissors' && computer == 'paper') {
    console.log(`you win`)
  } else {
    console.log('computer wins')
  }
})

// get playerChoice

choice.forEach((ch) => {
  ch.addEventListener('click', () => {
    playerChoice = ch.innerHTML
    let computer = getComputerChoice()

    if (playerChoice === computer) {
      console.log(`It's a tie!!!!!!!!!!!!!!!`)
    } else if (playerChoice == 'rock' && computer == 'scissors') {
      console.log(`you win`)
    } else if (playerChoice == 'paper' && computer == 'rock') {
      console.log(`you win`)
    } else if (playerChoice == 'scissors' && computer == 'paper') {
      console.log(`you win`)
    } else {
      console.log('computer wins')
    }
  })
})
