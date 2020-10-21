xdescribe('STRING MATCHER TEST', () => {

    it('Test string, "toBe" for matcher ===', () => {
        let firstStr = 'Hello World!';
        expect(firstStr).toBe('Hello World!');
    });

    it('Test string, "not.toBe" for matcher ===', () => {
        let firstStr = 'Hello World!';
        expect(firstStr).not.toBe('Not toBe');
    });

    it('Test string, "toEqual" for matcher ==', () => {
        let firstStr = 'Hello World!';
        expect(firstStr).toEqual('Hello World!');
    });

    it('Test string, "not.toEqual" for matcher ==', () => {
        let firstStr = 'Hello World!';
        expect(firstStr).not.toEqual('Not toEqual');
    });

    it('Test string, "toContain" checks hello present in string', () => {
        let firstStr = 'Hello World!';
        expect(firstStr).toContain('Hello');
    });

    it('Test string, "toMatch" matcher is for regular expression', () => {
        let message = 'This 4th lane of Underworld';
        expect(message).toMatch(/\d+/); //Check whether number present in string
        expect(message).toMatch("Underworld");
    });

});