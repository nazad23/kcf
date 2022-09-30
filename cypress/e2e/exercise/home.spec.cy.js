import * as homePage from '../pages/homePage';

describe('standard user tests', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        homePage.login().type('standard_user');
        homePage.password().type('secret_sauce');
        homePage.loginBtn().click();
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it('should have a title of Swag Labs', () => {
        cy.title().should('eq', 'Swag Labs');
    })

    it('checkout items', () => {   
        //filter price low to high
        homePage.filterDropDown().select('lohi')
        //trying to access children elements and then click on Add to Cart button
        homePage.parentItem().children(homePage.addToCartLow()).click()
        
        //filter price high to low
        homePage.filterDropDown().select('hilo')
        //trying to access children elements and then click on Add to Cart button
        homePage.parentItem().children().first().click(homePage.addToCartHigh())

        //checkout 
        homePage.cart().click();
        homePage.checkoutBtn().click();
        homePage.firstName().type('Newas')
        homePage.lastName().type('Azad')
        homePage.zipCode().type('11218')
        homePage.contBtn().click();
        homePage.finishBtn().click();
        //have not yet fixed assertion
        homePage.confirmation().should('be', 'displayed')
    });
})