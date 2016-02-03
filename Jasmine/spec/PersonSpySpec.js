describe('Person', function () {
    it('calls the sayHello() function', function () {
        var fakePerson = new Person();
        spyOn(fakePerson, 'sayHello');
        fakePerson.helloSomeone("world");
        expect(fakePerson.sayHello).toHaveBeenCalled();
    });

    it('greets the world', function () {
        var fakePerson = new Person();
        var world = 'world';
        spyOn(fakePerson, 'helloSomeone');
        fakePerson.helloSomeone(world);
        // Expect params
        expect(fakePerson.helloSomeone).toHaveBeenCalledWith(world);
        // Example of using _not_
        expect(fakePerson.helloSomeone).not.toHaveBeenCalledWith('foo');
    });

    it('says hello', function () {
        var fakePerson = new Person();
        // Create a spy to "stub it" if I have understood correctly
        fakePerson.sayHello = jasmine.createSpy("Say-hello spy");
        fakePerson.sayHello('world');
        expect(fakePerson.sayHello).toHaveBeenCalled();
    });

    it('says hello echoing', function () {
        var fakePerson = new Person();
        fakePerson.sayHello = jasmine.createSpy('Say hello ello ello - spy').and.returnValue('ello ello');
        expect(fakePerson.sayHello()).toEqual('ello ello');
    });
});