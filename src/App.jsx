import React, { useState } from "react";
import { Header, Button, Label, Grid } from "semantic-ui-react";
import { computersChoice, gameResults } from "./GameLogic";

const App = () => {
  const [userSelection, setUserSelection] = useState();
  const [computerSelection, setComputersChoice] = useState();
  const [resultMessage, setResultMessage] = useState();
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const onHandleSelect = async (e) => {
    setUserSelection(e);
    let randomSelection = computersChoice();
    setComputersChoice(randomSelection);
    let results = await gameResults(e, randomSelection);
    setResultMessage(results);

    let score;
    switch (results) {
      case "You Win, play again":
        score = userScore;
        setUserScore(score + 1);
        break;
      case "You Lose, try again":
        score = computerScore;
        setComputerScore(score + 1);
        break;
    }
  };

  return (
    <>
      <Header
        id="header"
        data-cy="header"
        as="h2"
        block
        textAlign="center"
        color="white"
        inverted
      >
        Rock Paper Scissors
      </Header>

      <div className="score-group">
        <h2 style={{ fontWeight: "bold", fontSize: 50, color: "white" }}>
          SCORE
        </h2>
        <Label data-cy="user-score" id="user-score">
          User
          <Label.Detail>{userScore}</Label.Detail>
        </Label>
        <Label data-cy="computer-score" id="computer-score">
          Computer
          <Label.Detail>{computerScore}</Label.Detail>
        </Label>
      </div>

      {userSelection && (
        <div className="selection">
          <Grid columns={2} padded>
            <div className="user-selection">
              <h2>YOUR CHOICE</h2>
              <Grid.Column data-cy="user-selection" id="user-selection">
                {userSelection}
              </Grid.Column>
            </div>
            <div className="computer-selection">
              <h2>COMPUTERS CHOICE</h2>
              <Grid.Column data-cy="computer-selection" id="computer-selection">
                {computerSelection}
              </Grid.Column>
            </div>
          </Grid>
        </div>
      )}

      <div className="button-group">
        <Button.Group id="button-group">
          <Button
            id="button-id-rock"
            data-cy="rock"
            color="red"
            onClick={(e) => onHandleSelect("rock")}
          >
            Rock
          </Button>
          <Button.Or />
          <Button
            id="button-id-paper"
            data-cy="paper"
            color="yellow"
            onClick={(e) => onHandleSelect("paper")}
          >
            Paper
          </Button>
          <Button.Or />
          <Button
            id="button-id-scissors"
            data-cy="scissors"
            color="blue"
            onClick={(e) => onHandleSelect("scissors")}
          >
            Scissors
          </Button>
        </Button.Group>
      </div>

      <div data-cy="game-response" className="result-message">
        {resultMessage} <br /><br /><br />
        {userSelection && (
          <Button
            data-cy="reset-game-button"
            id="reset-game-button"
            onClick={() => (
              setUserScore(0),
              setComputerScore(0),
              setUserSelection(""),
              setComputersChoice(""),
              setResultMessage("")
            )}
          >
            Reset game
          </Button>
        )}
      </div>
    </>
  );
};

export default App;
