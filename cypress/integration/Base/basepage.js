export const Base = {
    HomePage () {cy.visit('https://demoblaze.com/index.html');},
}

export const alert = {
    textEqualsTo(str){
        cy.wait(2500);
        cy.on('window:alert', (message) => {
            expect(message).to.equal(str);
            // cypress clicks on OK by default on window alerts
        })
    },
}