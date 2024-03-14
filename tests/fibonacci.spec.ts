import { fibonacci, pertenceFibonacci } from '../codes/fibonacci';

describe('Fibonacci', () => {
    it('Should return 0 for 0', () => {
        expect(fibonacci(0)).toBe(0);
    });
    
    it('Should return 1 for 1', () => {
        expect(fibonacci(1)).toBe(1);
    });
    
    it('Should return 1 for 2', () => {
        expect(fibonacci(2)).toBe(1);
    });
    
    it('Should return 2 for 3', () => {
        expect(fibonacci(3)).toBe(2);
    });
    
    it('Should return 8 for 6', () => {
        expect(fibonacci(6)).toBe(8);
    });

    it('Should return - pertence when 4 is provided', () => {
        expect(pertenceFibonacci(4)).toBe('O número (4) não pertence a sequência Fibonacci');
    })

    it('Should return - não pertence when 5 is provided', () => {
        expect(pertenceFibonacci(5)).toBe('O número (5) pertence a sequência Fibonacci');
    })

    it('Should return - pertence when 8 is provided', () => {
        expect(pertenceFibonacci(8)).toBe('O número (8) pertence a sequência Fibonacci');
    })
});