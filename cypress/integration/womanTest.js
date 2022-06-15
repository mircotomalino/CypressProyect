describe('pruebas en el sitio woman',function(){
    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category')
    })
    it("Large tops Search",function(){
        cy.get('#layered_category_4').check();
        cy.get('#layered_id_attribute_group_3').check();
        cy.get('#layered_category_4').uncheck();
        cy.get('#layered_id_attribute_group_3').uncheck();
    })
    it('Order by higher price',function(){
        cy.get('#selectProductSort').select('Price: Highest first')
    })
})