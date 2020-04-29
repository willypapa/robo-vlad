import { BootstrapFormPage } from "../page/bootstrap-form.page";

describe('Bootstrap Form Page', () => {

    const page = new BootstrapFormPage();

    beforeAll(() => {
        page.open();
    });

    it('should have correct emailInputLabel text', () => {
        expect(page.emailInputLabel)
            .toHaveText('Email address');
    });

    it('should type into emailInput', () => {
        page.emailInput
            .addValue('hello@world.com');

        expect(page.emailInput)
            .toHaveValue('hello@world.com');
    });

    it('should have correct passwordInputLabel text', () => {
        expect(page.passwordInputLabel)
            .toHaveText('Password');
    });

    it('should type into passwordInput', () => {
        page.passwordInput
            .addValue('password');

        expect(page.passwordInput)
            .toHaveValue('password');
    });

    it('should have correct checkboxLabel text', () => {
        expect(page.checkboxLabel)
            .toHaveText('Check me out');
    });

    it('should check the checkbox', () => {
        page.checkbox
            .click();

        expect(page.checkbox)
            .toBeChecked();
    });
});