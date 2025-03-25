


export class LoginPage {

   
    constructor(page) {
        this.page = page;
        this.emailField = page.getByRole('textbox', { name: 'Email' }); 
        this.passwordField = page.getByRole('textbox', { name: 'Password' });
        this.loginField= page.getByRole('button', { name: 'Sign In' });
        this.visibleText=page.locator('text=You are already signed in.')


    }
}