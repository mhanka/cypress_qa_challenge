
import  {alert, Base} from '../Base/basepage.js';
import {loginElements} from '../Login/loginelements.js';
import {product} from './addtocartelements.js'

describe('Add product to cart workflow', ()=> {

    let Samplecredentials;
    //Visit web page and data extraction
    before ('Visit main web page', () => {
        cy.fixture('samplecredentials.json').then(function(cred){
            Samplecredentials=cred;
        });
        Base.HomePage(); 
        //Note: potential issue in POST request in Login API
        // Login
        //loginElements.logInLink().click();
        //loginElements.usernameInput().invoke('val',Samplecredentials.existingUser);
        //loginElements.passwordInput().invoke('val',Samplecredentials.password);
        //cy.wait(500);
        //loginElements.logInButton().click();
        //let message='Welcome'+ Samplecredentials.existingUser;
        //loginElements.welcomeMessage().should('have.text',message);
    });
    //Preserve cookies and reload
    beforeEach ('Keep cookies and reload', ()=>{
        Cypress.Cookies.preserveOnce('tokenp_', 'user');
        cy.reload();  
    });

    it('Able to select the product and view it',()=>{

       product.product_link().click();
       cy.url().should('contain', '/prod.'); 

    });

    it('Able to view the product title of selected product', ()=>{

        product.product_link().click();
        product.productTitle().should('be.visible');
    });

    it('Able to view the product image of selected product', ()=>{

        product.product_link().click();
        product.productImage().should('be.visible');
    });

    it('Able to view the product description of selected product', ()=>{

        product.product_link().click();
        product.productDescription().should('be.visible');
    });

    it('Able to view the product price of selected product', ()=>{

        product.product_link().click();
        product.productprice().should('be.visible');
    });

    it('Able to add the product to the cart and verify product added alert is displayed', ()=>{

        product.product_link().click();
        product.addtocartbutton().click();
        alert.textEqualsTo('Product added');
    });





});

