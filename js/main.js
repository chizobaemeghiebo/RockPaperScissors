let rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')

// Create a function named getComputerchoice

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 10) + 1
  if (computerChoice <= 3) {
    console.log('rock')
  } else if (computerChoice > 3 && computerChoice <= 6) {
    console.log('paper')
  } else {
    console.log('scissors')
  }
}

getComputerChoice()
