describe("user can select", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("user can select rock", () => {
    cy.get("[data-cy='rock']").click();
    cy.wait(400);
    cy.get("[data-cy='user-selection']").should("contain", "rock");
  });

  it("user can select paper", () => {
    cy.get("[data-cy='paper']").click();
    cy.wait(400);
    cy.get("[data-cy='user-selection']").should("contain", "paper");
  });

  it("user can select scissors", () => {
    cy.get("[data-cy='scissors']").click();
    cy.wait(400);
    cy.get("[data-cy='user-selection']").should("contain", "scissors");
  });
});
