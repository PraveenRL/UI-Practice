//To check for deep equality, use .toEqual() instead of .toBe()
xdescribe('toBe vs toEqual', () => {

    /*
    //This will throw error, because it will not check deep equality
    it('Should test "toBe" matcher', () => {        
        let a = {
            val: 10
        };

        let b = {
            val: 10
        };

        expect(a).toBe(b);
    });
    */

    it('Should test "toEqual" matcher', () => {
        let a = {
            val: 10
        };

        let b = {
            val: 10
        };

        expect(a).toEqual(b);
    });

});