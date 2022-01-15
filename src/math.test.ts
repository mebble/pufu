import { futureValue } from './math';

describe('futureValue', () => {
    test('returns the future value one year from now', () => {
        const presentValue = 100;
        const growthRate = 20;
        const numYears = 1;
        expect(futureValue(presentValue, growthRate, numYears)).toBe(120);
    });
});
