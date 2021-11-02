/// <reference types="cypress"/>
import  {alert, Base} from '../Base/basepage.js';
import {loginElements} from './loginelements.js';

//Test suite for login flow
describe('Login Test flow', () => {
    let Samplecredentials;
    //Visit web page and data extraction
    before ('Visit main web page', () => {
        cy.fixture('samplecredentials.json').then(function(cred){
            Samplecredentials=cred;
        });
        Base.HomePage();      
    });
    //Page refresh
    beforeEach ('Page Refresh', ()=>{
        cy.reload();  
    });
    it('Should display modal button before clicking login button', () => {
        
        loginElements.logInLink().should('have.text','Log in')
        loginElements.logInLink().click();
    });

    it('should display modal button after clicking login button', ()=>{

        loginElements.logInLink().click();
        loginElements.logInModal().should('be.visible');

    });

    it('should click close button without filling details', ()=>{

        loginElements.logInLink().click();
        cy.wait(500);
        loginElements.crossmark().click({force:true});

    });
    it('Should display alert to fill data', ()=>{
     
        loginElements.logInLink().click();
        loginElements.logInButton().click();
        alert.textEqualsTo('Please fill out Username and Password.')

    });

    it('Should display alert to perform user registeration', ()=>{
     
        loginElements.logInLink().click();
        loginElements.usernameInput().invoke('val',Samplecredentials.wrongUser);
        loginElements.passwordInput().invoke('val',Samplecredentials.password);
        loginElements.logInButton().click();
        alert.textEqualsTo('User does not exist.')

    });
    
    it('Should display alert to perform for invalid password', ()=>{

        loginElements.logInLink().click();
        loginElements.usernameInput().invoke('val',Samplecredentials.existingUser);
        loginElements.passwordInput().invoke('val',Samplecredentials.wrongPassword);
        loginElements.logInButton().click();
        alert.textEqualsTo('Wrong password.');
    });

    it('Should login successfully and see welcome message', ()=>{

        loginElements.logInLink().click();
        loginElements.usernameInput().invoke('val',Samplecredentials.existingUser);
        loginElements.passwordInput().invoke('val',Samplecredentials.password);
        cy.wait(500);
        loginElements.logInButton().click();
        let message='Welcome'+ Samplecredentials.existingUser;
        loginElements.welcomeMessage().should('have.text',message);
    });

    it('Should login successfully and logout and should not see welcome message', ()=>{

        loginElements.logInLink().click();
        loginElements.usernameInput().invoke('val',Samplecredentials.existingUser);
        loginElements.passwordInput().invoke('val',Samplecredentials.password);
        loginElements.logInButton().click();
        loginElements.logOutLink().click();
        loginElements.welcomeMessage().should('not.be.visible');
    });

    
  })