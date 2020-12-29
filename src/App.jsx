import React, { useState } from "react";
import { Header, Button, Label } from "semantic-ui-react";

const App = () => {
  const [userSelection, setUserSelection] = useState()
  /*const onHandleSelect(selection)  {
  setUserSelection(selection)
  }*/
  

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
      <Label data-cy='selection' size="big">
        {userSelection}
      </Label>
      }
      
      <div className="button-group">
        <Button.Group size="large">
          <Button data-cy="rock" color="red" onClick={() => setUserSelection('rock')}>
            Rock
          </Button>
          <Button.Or />
          <Button data-cy="paper" color="yellow" onClick={() => setUserSelection('paper')}>
            Paper
          </Button>
          <Button.Or />
          <Button data-cy="scissors" color="blue" onClick={() => setUserSelection('scissors')}>
            Scissors
          </Button>
        </Button.Group>
      </div>
    </>
  );
};

export default App;
