import { futureValue } from './math';

describe('futureValue', () => {
    describe('positive growth rate', () => {
        test('returns the future value one year from now', () => {
            const presentValue = 100;
            const growthRate = 20;

            expect(futureValue(presentValue, growthRate, 1)).toBe(120);
        });

        test('returns the future value rounded to the nearest 2 decimal places', () => {
            const presentValue = 100;

            expect(futureValue(presentValue, 20, 3)).toBe(172.8);
            expect(futureValue(presentValue, 20, 4)).toBe(207.36);
            expect(futureValue(presentValue, 23, 3)).toBe(186.09);
        });
    });

    describe('negative growth rate', () => {
        test('returns the future value one year from now', () => {
            const presentValue = 100;
            const growthRate = -20;

            expect(futureValue(presentValue, growthRate, 1)).toBe(80);
        });

        test('returns the future value rounded to the nearest 2 decimal places', () => {
            const presentValue = 100;

            expect(futureValue(presentValue, -20, 3)).toBe(51.2);
            expect(futureValue(presentValue, -20, 4)).toBe(40.96);
            expect(futureValue(presentValue, -24, 3)).toBe(43.9);
        });
    });
});
