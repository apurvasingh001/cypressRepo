class LoginPage{

username(){
    return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
}

password(){
    return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
}

submit(){
return  cy.get('.oxd-button')
}

login(Username, Password){
    this.username().type(Username)
    this.password().type(Password)
    this.submit().click()
}

}

export default LoginPage