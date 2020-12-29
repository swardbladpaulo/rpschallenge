//const { computersChoice } = require("../../src/GameLogic");
import { computersChoice } from '../../src/GameLogic';

describe("when computer picks rock", () => {
  beforeEach(() => {
    cy.visit("/"),
    {
      onBeforeLoad: computer => {
        cy.stub(computersChoice(), 'computer').returns('rock')
      }
    }
  });

  it("when user select rock, user see tie", () => {
    cy.get("[data-cy='rock']").click();
    cy.get("[data-cy='game-response']").should("contain", "It is a tie");
    cy.get("[data-cy='user-score']").contains(0);
  });

  it("when user select paper, computer loose", () => {
    cy.get("[data-cy='paper']").click();
    cy.get("[data-cy='game-response']").should("contain", "You Win, play again");
    cy.get("[data-cy='user-score']").contains(1);
    cy.get("[data-cy='computer-score']").contains(0);
  });

  it("when user select scissors, computer wins", () => {
    cy.get("[data-cy='scissors']").click();
    cy.get("[data-cy='game-response']").should(
      "contain",
      "You Lose, try again"
    );
    cy.get("[data-cy='user-score']").contains(0);
    cy.get("[data-cy='computer-score']").contains(1);
  });
});
