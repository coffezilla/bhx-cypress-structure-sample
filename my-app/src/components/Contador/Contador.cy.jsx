import React from "react";
import Contador from "./Contador";

describe("<Contador />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Contador />, { timeout: 10000 });
  });

  it("click and sum", () => {
    cy.mount(<Contador />);
    cy.get('[data-testid="count-number"]').should("have.text", "0");
    cy.get('[data-testid="button-count"]').click();
    cy.get('[data-testid="count-number"]').should("have.text", "1");
  });
});
