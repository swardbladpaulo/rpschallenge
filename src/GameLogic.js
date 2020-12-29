import Chance from "chance";

const computersChoice = () => {
  let chance = new Chance();
  let choice = chance.pickone(["rock", "paper", "scissors"]);

  return choice;
};
const gameResults = (userSelection, computerSelection) => {
  let resultMessage;
  switch ([userSelection, computerSelection].join()) {
    case ["rock", "paper"].join():
    case ["paper", "scissors"].join():
    case ["scissors", "rock"].join():
      resultMessage = "You Lose, try again";

      break;
    case ["paper", "rock"].join():
    case ["scissors", "paper"].join():
    case ["rock", "scissors"].join():
      resultMessage = "You Win, play again";
      break;
    default:
      resultMessage = "It is a tie";
      break;
  }
  return resultMessage;
};

export { computersChoice, gameResults };
