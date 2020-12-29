import React, { useState } from "react";
import { Header, Button, Label } from "semantic-ui-react";
import { computersChoice, gameResults } from './GameLogic';

const App = () => {
  const [userSelection, setUserSelection] = useState()
  const [computerSelection, setComputersChoice] = useState()
  const [resultMessage, setResultMessage] = useState()

  const onHandleSelect = async (e) => {
    setUserSelection(e)
    let randomSelection = computersChoice()
    setComputersChoice(randomSelection)
    let results= await gameResults(e, randomSelection)
    setResultMessage(results)
  }
  
  return (
    <>
      <Header
        data-cy="header"
        as="h2"
        block
        textAlign="center"
        color="green"
        inverted
      >
        Rock Paper Scissors
      </Header>

      <div className="score-group">
        <Label data-cy="user-score" color="pink" size="huge">
          User
        <Label.Detail>0</Label.Detail>
        </Label>
        <Label data-cy="computer-score" color="orange" size="huge">
          Computer
        <Label.Detail>0</Label.Detail>
        </Label>
      </div>

      {userSelection && 
      <>
        <Label data-cy='selection' size="big">
          {userSelection}
        </Label>
        
        <Label data-cy='computer-selection' size="big">
          {computerSelection}
        </Label>
      </>
      }

      <div className="button-group">
        <Button.Group size="large">
          <Button data-cy="rock" color="red" value="rock" onClick={(e) => onHandleSelect('rock')}>
            Rock
          </Button>
          <Button.Or />
          <Button data-cy="paper" color="yellow" onClick={(e) => onHandleSelect('paper')}>
            Paper
          </Button>
          <Button.Or />
          <Button data-cy="scissors" color="blue" onClick={(e) => onHandleSelect('scissors')}>
            Scissors
          </Button>
        </Button.Group>
      </div>
      {resultMessage}
    </>
  );
};

export default App;
