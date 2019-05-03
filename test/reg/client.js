import { assert } from 'chai';

describe('Client', function () {

    describe('Page Level', function () {

        it('Get title', function () {
            browser.url('/');
            let title = browser.getTitle();
            assert.equal(title, 'Bug Tracker');
        })

        it('Favicon', function () {
            browser.url('/favicon.ico');
            let icon = $('img');
            let width = icon.getCSSProperty('width').parsed.value;
            let height = icon.getCSSProperty('height').parsed.value;
            let size = `${width}x${height}`;
            assert.equal(size, '256x256');
        })

    });

    describe('Elements exist', function () {

        it('Header', function () {
            browser.url('/');
            let header = $('.custom-header').isDisplayed();
            assert.equal(header, true);
        })

        it('App', function () {
            let header = $('.site-content').isDisplayed();
            assert.equal(header, true);
        })

        it('Footer', function () {
            let header = $('.custom-footer').isDisplayed();
            assert.equal(header, true);
        })

    });

});

describe('Registration', function () {

    describe('First name', function () {

        it('Max Characters', function () {
            let fnameMaxLength = 20;
            browser.url('/');
            $('#registration').click();
            let input = $('#fname')
            input.addValue('1ht7#'.repeat(fnameMaxLength/5));
            let actual = input.getValue().length;
            input.clearValue();
            assert.equal(actual, fnameMaxLength);
        })
    })
});

/*

it('Placeholder text', function () {
    browser.url('/');
    $('#registration').click();
    let text = $('#email').getAttribute('placeholder');
    assert.equal(text, 'Email *');
});

it('Get button hover color', function () {
            $('#back').moveTo();
            browser.pause(2000);
            let hoverColor = $('#back').getCSSProperty('background-color').parsed.hex;
            console.log(hoverColor);
            assert.equal(hoverColor, '#138496');
        });

*/
