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

// game emotions???
const loser = ['You loser', 'Brudda ugggg', 'Give up', 'You can never make it', 'You should be ashamed of yourself']
const winner = ['Champ', "Let's goooo", 'Winnnerrrrrr', 'You should be proud of yourself', 'It GIRL!!!!!!!!!!!']

// get player name
let player = prompt('Enter your name: ')
playerName.innerHTML = `${player}!`

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

// get playerChoice
choice.forEach((ch) => {
  ch.addEventListener('click', () => {
    playerChoice = ch.id
    let computer = getComputerChoice()

    // show stats
    let stat = document.querySelector('.stat')
    stat.innerHTML = `${player}: ${playerChoice} <br> Computer: ${computer}`
    console.log(ch)

    if (playerChoice === computer) {
      win.innerHTML = `It's a tie!!!!!!!!!!!!!!!`
    } else if (playerChoice == 'rock' && computer == 'scissors') {
      humanScore++
      humscore.innerHTML = Number(humanScore)
      win.innerHTML = `You win!`
    } else if (playerChoice == 'paper' && computer == 'rock') {
      humanScore++
      humscore.innerHTML = Number(humanScore)
      win.innerHTML = `You win!`
    } else if (playerChoice == 'scissors' && computer == 'paper') {
      humanScore++
      humscore.innerHTML = Number(humanScore)
      win.innerHTML = `You win!`
    } else {
      computerScore++
      comscore.innerHTML = Number(computerScore)
      win.innerHTML = 'Computer wins'
    }

    // game over logic
    let rand = Math.floor(Math.random() * 5)
    if (computerScore >= 5) {
      alert(`Computer wins. ${loser[rand]}`)
      // TODO:REFRESH PAGE
      location.reload()
    } else if (humanScore >= 5) {
      alert(`${player} wins.  ${winner[rand]}`)
      location.reload()
    }
  })
})

// Work on gaame over
