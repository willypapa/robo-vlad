export class BootstrapFormPage {

    private readonly url =
        'https://getbootstrap.com/docs/4.0/components/forms/';

    private readonly selectors: any = {
        emailInput: '#exampleInputEmail1',
        emailInputLabel: 'label[for=exampleInputEmail1]',
        passwordInput: '#exampleInputPassword1',
        passwordInputLabel: 'label[for=exampleInputPassword1]',
        checkbox: '#exampleCheck1',
        checkboxLabel: 'label[for=exampleCheck1]'
    };

    get emailInputLabel() {
        return $(this.selectors.emailInputLabel);
    }

    get emailInput() {
        return $(this.selectors.emailInput);
    }

    get passwordInputLabel() {
        return $(this.selectors.passwordInputLabel);
    }

    get passwordInput() {
        return $(this.selectors.passwordInput);
    }

    get checkboxLabel() {
        return $(this.selectors.checkboxLabel);
    }

    get checkbox() {
        return $(this.selectors.checkbox);
    }

    open() {
        browser.url(this.url);
    }

}
