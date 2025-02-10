import sayHello from './app';


test('Debe retornar "Hello, World!"', () => {
    expect(sayHello()).toBe("Hello, World!");
});
