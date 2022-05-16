describe("SkillTracker", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Renders correctly", () => {
    cy.contains("Skill Tracker");
  });

  it("Search with Name works correctly", () => {
    cy.get(".name").type("Mark");
    cy.get(".searchProfiles").click();
    cy.get("h5").eq(0).contains("Basic Details");
    cy.get("h5").eq(0).next().find("tr").should("have.length", 4);
  });

  it("Search with Associate Id works correctly", () => {
    cy.get(".associateId").type("CTS12342");
    cy.get(".searchProfiles").click();
    cy.get("h5").eq(0).contains("Basic Details");
    cy.get("h5").eq(0).next().find("tr").should("have.length", 4);
  });

  it("Search with Skill works correctly", () => {
    cy.get(".skill").select("ANGULAR");
    cy.get(".searchProfiles").click();
    cy.get("h5").eq(0).contains("Basic Details");
    cy.get("h5").eq(0).next().find("tr").should("have.length", 4);
  });

  it("Profile not found works correctly", () => {
    cy.get(".associateId").type("CTS12341");
    cy.get(".searchProfiles").click();
    cy.get(".error-container")
      .find("div[role='alert']")
      .eq(0)
      .find("div")
      .eq(1)
      .contains(
        "Profiles not found for the given criteria associateId::CTS12341"
      );
  });
});
