describe('Add Contact', () => {

    beforeEach(() => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com')
        })

        it('Login page renders correctly', () => {
            cy.eyesOpen({
                appName: 'Contact List App',
                testName: 'Login Page',
            })

            cy.eyesCheckWindow({
                tag: "Login Window",
                target: 'window',
                fully: true
            });

            cy.eyesClose()
            
        })

    it('Returns error when validation fails', () => {
        cy.get('#email').type('test@fake.com')
        cy.get('#password').type('foobarfoo')
        cy.get('#submit').click()

        cy.get('#add-contact').click()
        cy.get('#firstName').type('Prunella')
        cy.get('#submit').click()
        cy.get('#error').should('contain', 'Contact validation failed: lastName')

        cy.eyesOpen({
            appName: 'Contact List App',
            testName: 'Validation Error',
        })

        cy.eyesCheckWindow({
            tag: "Add Contact Window",
            target: 'window',
            fully: true
        });

        cy.eyesClose()
    })
})