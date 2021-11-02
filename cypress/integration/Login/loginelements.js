export const loginElements = {
    logInLink: () => cy.get('#login2'),
    logInModal: () => cy.get('div#logInModal'),
    modalTitle: () => cy.get('#logInModalLabel'),
    crossmark: () => cy.get('#logInModalLabel + button'),
    usernameInput: () => cy.get('#loginusername'),
    passwordInput: () => cy.get('#loginpassword'),
    logInButton: () => cy.get('body.modal-open:nth-child(2) div.modal.fade.show:nth-child(3) div.modal-dialog div.modal-content div.modal-footer > button.btn.btn-primary:nth-child(2)'),
    welcomeMessage: () => cy.get('#nameofuser'),
    logOutLink: () => cy.get('#logout2'),
};



