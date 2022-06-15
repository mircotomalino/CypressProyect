describe('formas de encontrar un elemento', function(){
    it('buscar en el buscador', function(){
        cy.visit('http://automationpractice.com/index.php?');
        cy.get('.search_query.form-control.ac_input').type('hola'); //buscamos por clase
        cy.get('#search_query_top').type(' como estas'); // buscamos por #ID
        cy.get('[name="search_query"]').type(' ? ') //buscamos por propiedad
        cy.get('[placeholder="Search"]').clear(); //borra lo que hay en el elemento
    })
})