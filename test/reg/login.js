import { assert } from 'chai';

let maxLength = 45;

describe('Login', function () {

    describe('Email', function () {

        it('Max Characters', function () {
            browser.url('/');
            let input = $('#email');
            input.addValue('j'.repeat(maxLength));
            let actual = input.getValue().length;
            input.clearValue();
            assert.equal(actual, maxLength);
        })

        it('Max Characters + 1', function () {
            let input = $('#email');
            input.addValue('j'.repeat(maxLength + 1));
            let actual = input.getValue().length;
            assert.equal(actual, maxLength);
        })




        it('Verify that font size: 16px', function () {
            let email = $('#email');
            let fontsize = email.getCSSProperty('font-size').parsed.value;
            assert.equal(fontsize, '16');
        })
    })

});
    describe ('Forgot Password', function () {

        it('Forgot Password exists', function () {
            //browser.url ('/');
            let forgotPass = $('#forgot').isDisplayed();
            assert.equal (forgotPass, true);

        })
    });


