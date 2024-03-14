import { reverseString } from '../codes/reverse-string';

describe('Reverse String', () => {
    it('Should return "gnirts" for "string"', () => {
        expect(reverseString('string')).toBe('gnirts');
    });

    it('Should return "!oditrevnI" where "Invertido!" is provided', () => {
        expect(reverseString('Invertido!')).toBe('!oditrevnI');
    });
});