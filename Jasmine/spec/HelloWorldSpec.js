describe('Hello world', function() {
    it('says hello', function () {
        expect(helloWorld()).toEqual('Hello World!');
    });

    it("says world", function() {
        expect(helloWorld()).toContain("World");
    });
});