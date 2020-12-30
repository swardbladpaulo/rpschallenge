import React, { useState } from "react";
import { Header, Button, Label, Container, Image } from "semantic-ui-react";
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
      default:
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
      >
        Rock Paper Scissors
      </Header>

      <div className="score-group">
        <Label data-cy="user-score" color="pink" size="huge">
          User
          <Label.Detail>{userScore}</Label.Detail>
        </Label>
        <Label data-cy="computer-score" color="orange" size="huge">
          Computer
          <Label.Detail>{computerScore}</Label.Detail>
        </Label>
      </div>

      {userSelection && (
        <div className="selection">
          <Container>
            <Label data-cy="selection" size="big">
              {userSelection}
            </Label>
          </Container>

          <Container className="computer-selection">
            <Label data-cy="computer-selection" size="big">
              {computerSelection}
            </Label>
          </Container>
        </div>
      )}
      <Button onClick={(e) => (setUserScore(0), setComputerScore(0), setUserSelection(""), setComputersChoice(""), setResultMessage(""))}>
        Reset game
      </Button>
      <div className="button-group">
        <Button.Group size="large">
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
