describe("user can play again", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("user can reset game to play again", () => {
    cy.get("[data-cy='paper']").click();
    cy.get("[data-cy='reset-game-button']").should("be.visible");
    cy.get("[data-cy='reset-game-button']").click();
    cy.get("[data-cy='user-score']").contains(0);
    cy.get("[data-cy='computer-score']").contains(0);
  });
});
