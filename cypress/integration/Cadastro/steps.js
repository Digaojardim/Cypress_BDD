Given(/^que acesso o site Tinnova$/, () => {
  cy.visit("/");
});

Then(/^clico no button Entrar$/, () => {
  cy.get(".sc-bczRLJ").click();
});

Then(/^clico no button Adicionar$/, () => {
  cy.get(".sc-hKMtZM > :nth-child(3)").click();
});

When(/^preencho minhas informaoes$/, () => {
  cy.get(":nth-child(2) > .sc-iqcoie").focus().type("Deda").click();
  cy.get(":nth-child(3) > .sc-iqcoie")
    .focus()
    .type("Deda.jardim@.gmail.com")
    .click();
  cy.get(":nth-child(4) > .sc-iqcoie").focus().type("339909876").click();
  cy.get(":nth-child(5) > .sc-iqcoie").focus().type("(11)978765436").click();
});

Then(/^meu cadastro e realizar com sucesso$/, () => {
  cy.get(":nth-child(4) > :nth-child(1) > p").should("not.equal", "Deda");
});

Then(/^clico no button Guarda$/, () => {
  cy.get(".sc-bczRLJ").click();
});
