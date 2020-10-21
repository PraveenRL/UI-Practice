//Exclude describe / it with 'x' before
xdescribe('ARRAY TEST', () => {     

    xit('Testing Array using "toEqual", arrays should be equal', () => {
        let a = [1, 2, 3];
        expect(a).toEqual([1, 2, 3]);
    });

    it('Testing Array using "toContain", arrays should be equal', () => {
        let strArray = ['abc', 'def', 'xyz'];
        expect(strArray).toContain('def');
    });

});