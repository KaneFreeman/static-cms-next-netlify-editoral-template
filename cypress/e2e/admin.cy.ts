export {};

describe("admin page", () => {
  it("loads", () => {
    cy.visit("/admin");
    cy.contains("button", "Login with Netlify Identity5").should("be.visible");
  });
});
