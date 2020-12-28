describe("When user visit mainpage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("user can see header", () => {
    cy.get("[data-cy='header']").should("contain", "Rock Paper Scissors");
  });

  it("user can see a game play options", () => {
    cy.get("[data-cy='rock']").contains("rock");
    cy.get("[data-cy='paper']").contains("paper");
    cy.get("[data-cy='scissors']").contains("scissors");
  });

  it("user can see current scores", () => {
    cy.get("[data-cy='user-score']").contains(0);
    cy.get("[data-cy='computer-score]").contains(0);
  });
});
