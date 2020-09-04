const sort = require('../array');
const expect = require('chai').expect;

describe.only('Sort', () => {
    it('sort array in ascending order', () => {
        const array = [4, 1, 3, 5, 2];
        const expected = [1, 2, 3, 4, 5];

        const actual = sort(array)
            expect(actual).to.deep.equal(expected)
    })
    it('does not return an array in ascending order the same', () => {
        const array = [1, 2, 3, 4, 5];
        const expected = [1, 2, 3, 4, 5];

        const actual = sort(array)
        expect(actual).to.deep.equal(expected)
    })
    it('returns an empty array as an empty array', () => {
        const array = [];
        const expected = [];

        const actual = sort(array)
        expect(actual).to.deep.equal(expected)
    })
    it('returns an array in descending order in ascending order', () => {
        const array = [5, 4, 3, 2, 1];
        const expected = [1, 2, 3, 4, 5];

        const actual = sort(array)
        expect(actual).to.deep.equal(expected)
    })
    it('partially sorted array in ascending order', () => {
        const array = [1, 2, 4, 3, 5];
        const expected = [1, 2, 3, 4, 5];

        const actual = sort(array)
            expect(actual).to.deep.equal(expected)
    })
    //what if the array had duplicate values, what about negative numbers
})