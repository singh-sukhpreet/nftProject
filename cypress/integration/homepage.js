describe("Homepage Test Suite", ()=> {

    it("First Test case", ()=>{
        cy.visit("")
        cy.url().should("include", "/home")
    })
});