import React, { useState } from "react";
import { Header, Button, Label, Container, Card } from "semantic-ui-react";
import { computersChoice, gameResults } from "./GameLogic";
import rock from "./images/rock.svg";
import paper from "./images/paper.svg";
import scissors from "./images/scissors.svg";

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
        data-cy="header"
        as="h2"
        block
        textAlign="center"
        color="green"
        inverted
        >Rock Paper Scissors
        <Button onClick={(e) => (setUserScore(0), setComputerScore(0), setUserSelection(""), setComputersChoice(""), setResultMessage(""))}>
          Reset game
        </Button>
      </Header>

      <div className="score-group">
        <h2 style={{fontWeight:"bold", fontSize:50}}>SCORE</h2>
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
        < div className="selection">
          <Container className="user-selection">
          <h2>YOUR CHOICE</h2>
            <Label data-cy="user-selection" id="user-selection">
              {userSelection}
            </Label>
          </Container>
        
          <Card className="computer-selection">
            <h2>COMPUTERS CHOICE</h2>
            <Label data-cy="computer-selection" id="computer-selection">
              {computerSelection}
            </Label>
          </Card>
          </div>
      )}

      <div className="button-group">
        <Button.Group>
          <Button
            data-cy="rock"
            color="red"
            value="rock"
            onClick={(e) => onHandleSelect("rock")}
          >
            Rock
          </Button>
          <Button.Or />
          <Button
            data-cy="paper"
            color="yellow"
            onClick={(e) => onHandleSelect("paper")}
          >
            Paper
          </Button>
          <Button.Or />
          <Button
            data-cy="scissors"
            color="blue"
            onClick={(e) => onHandleSelect("scissors")}
          >
            Scissors
          </Button>
        </Button.Group>
      </div>

      <div data-cy="game-response" className="result-message">
        {resultMessage}
      </div>
    </>
  );
};

export default App;
