import { futureValue } from './math';

describe('futureValue', () => {
    test('throws err when present value is negative', () => {
        const presentValue = -10;

        expect(() => {
            futureValue(presentValue, 20, 1);
        }).toThrowError('Present value should not be negative');
    });

    test('throws err when number of years is negative', () => {
        const numYears = -1;

        expect(() => {
            futureValue(100, 20, numYears);
        }).toThrowError('Number of years should not be negative');
    });

    test('throws err when number of years is not an integer', () => {
        const numYears = 1.23;

        expect(() => {
            futureValue(100, 20, numYears);
        }).toThrowError('Number of years should be an integer');
    });

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

        test('returns the future value contrained at zero', () => {
            const presentValue = 100;

            expect(futureValue(presentValue, -120, 1)).toBe(0);
            expect(futureValue(presentValue, -120, 2)).toBe(0);
            expect(futureValue(presentValue, -120, 3)).toBe(0);
        });
    });
});
