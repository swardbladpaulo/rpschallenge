import Chance from 'chance';

const computersChoice = () => {
  let chance= new Chance()
  let choice = chance.pickone(['rock', 'paper', 'scissors']);

  return (
    choice
  )
}

export {computersChoice}