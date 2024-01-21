import React from "react";
import Placeholder from "./Placeholder";

describe("<Placeholder />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Placeholder />);
  });

  it("Default title", () => {
    cy.mount(<Placeholder />);
    cy.get('[data-testid="title-placeholder"]').should(
      "have.text",
      "placeholder..."
    );
  });

  it("Change title", () => {
    cy.mount(<Placeholder title="Footer" />);
    cy.get('[data-testid="title-placeholder"]').should("have.text", "Footer");
  });
});
