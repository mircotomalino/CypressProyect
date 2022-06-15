
class indexPage{

    search= (element)=>{
        cy.fixture('index.json').then(locators)=>{
        cy.get(this.searchPoint).type(element);
        cy.get(this.searchButton).click();
        }
    }
}

export default new indexPage();