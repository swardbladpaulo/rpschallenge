import React from "react";
import { Header, Button } from "semantic-ui-react";

const App = () => {
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
      <div className="button-group">
        <Button.Group>
          <Button data-cy="rock" color="red">
            Rock
          </Button>
          <Button.Or />
          <Button data-cy="paper" color="yellow">
            Paper
          </Button>
          <Button.Or />
          <Button data-cy="scissors" color="blue">
            Scissors
          </Button>
        </Button.Group>
      </div>
    </>
  );
};

export default App;
