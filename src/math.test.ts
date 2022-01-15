import { add } from './math';

describe('add', () => {
    test('it returns the sum of two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });
});
