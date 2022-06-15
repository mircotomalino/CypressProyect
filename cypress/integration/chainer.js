describe('Escribir en busqueda varios strings',function(){
    it('vamos a escribir y a limpiar', function(){
        cy.visit('http://automationpractice.com/index.php?');
        cy.get('#search_query_top').clear().type('hola').clear().type('peshooo');
    })
})