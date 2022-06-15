/// < reference types="cypress" />
import indexPage from '../integration/index'
import articlePage from '../integration/articles'

describe('search test cases', function(){
    before(function(){
        cy.log('before all')
    })
    after(function(){
        cy.log('after all')
    })
    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php?')
    })
    afterEach(function(){
        cy.log('poniendo datos en su estado original')
    })

    it('Search dresess', function(){
        indexPage.search('dress');
        cy.logSpecFormat('searching for dresess');
        articlePage.verifyArticle('"dress"')
        // cy.get('#search_query_top').type('dress');
        // cy.get('#searchbox > .btn').click();
        // cy.get('.lighter').contains('"dress"')

        
    })
    it('Search hats', function(){
        indexPage.search('hat');
        articlePage.verifyArticle('"hat"')
        // cy.get('#search_query_top').type('hat');
        // cy.get('#searchbox > .btn').click();
        // cy.get('.lighter').contains('"hat"')

        
    })
})