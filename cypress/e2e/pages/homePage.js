/*
https://www.saucedemo.com/

Automate this process
1. Login
2. Purchase the most expensive & cheapest items with: 
	• standard user
	• performance glitch user

3. Bonus: Report back how much longer it takes the performance glitch user to purchase the items.
*/

const login = () => cy.get('[data-test=username]');
const password = () => cy.get('[data-test=password]');
const loginBtn = () => cy.get('[data-test=login-button]');
const filterDropDown = () => cy.get('[data-test="product_sort_container');
const parentItem = () => cy.get('.inventory_list');
const addToCartLow = () => cy.get('[data-test="add-to-cart-sauce-labs-onesie"]');
const addToCartHigh = () => cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
const cart = () => cy.get('[id=shopping_cart_container]')
const checkoutBtn = () => cy.get('[data-test="checkout"]')
const firstName = () => cy.get('[data-test="firstName"]')
const lastName = () => cy.get('[data-test="lastName"]')
const zipCode = () => cy.get('[data-test="postalCode"]')
const contBtn = () => cy.get('[data-test="continue"]')
const finishBtn = () => cy.get('[data-test="finish"]')
const confirmation = () => cy.get('[id="checkout_complete_container"]')

module.exports = {
    login,
    password,
    loginBtn,
    filterDropDown,
    parentItem,
    addToCartLow,
    addToCartHigh,
    cart,
    checkoutBtn,
    firstName,
    lastName,
    zipCode,
    contBtn,
    finishBtn,
    confirmation
}
