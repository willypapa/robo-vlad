export class BootstrapFormPage {

    readonly url =
        'https://getbootstrap.com/docs/4.0/components/forms/';

    private readonly selectors: { [pageElement: string]: string } = {
        emailInput: '#exampleInputEmail1',
        emailInputLabel: 'label[for=exampleInputEmail1]',
        passwordInput: '#exampleInputPassword1',
        passwordInputLabel: 'label[for=exampleInputPassword1]',
        checkbox: '#exampleCheck1',
        checkboxLabel: 'label[for=exampleCheck1]'
    };

}
