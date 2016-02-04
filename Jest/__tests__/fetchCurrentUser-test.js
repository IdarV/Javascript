jest.dontMock('../fetchCurrentUser.js');

describe('fetchCurrentUser', function() {
    it('calls into $.ajax with the correct params', function() {
        var $ = require('jquery');
        var fetchCurrentUser = require('../fetchCurrentUser');

        // Call into the function we want to test
        function dummyCallback() {}
        fetchCurrentUser(dummyCallback);

        // Now make sure that $.ajax was properly called during the previous
        // 2 lines
        expect($.ajax).toBeCalledWith({
            type: 'GET',
            url: 'http://example.com/currentUser',
            success: jasmine.any(Function)
        });
    });

    it('calls the callback when $.ajax is finished', function () {
        var $ = require('jquery');
        var fetchCurrentUser = require('../fetchCurrentUser');

        var callback = jest.genMockFunction();
        fetchCurrentUser(callback);

        $.ajax.mock.calls[0][0].success({
            firstName: 'Bobby',
            lastName: '");DROP TABLE Users;--'
        });

        expect(callback.mock.calls[0][0]).toEqual({
            loggedIn: true,
            fullName: 'Bobby ");DROP TABLE Users;--'
        });
    });
});