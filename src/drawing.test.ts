import type { Asset } from './types';
import { controlPoints, mapToAssetValue, mapToCanvas } from './drawing';

describe('controlPoints', () => {
    test('should return control points when resultant numbers are wholesome', () => {
        const p1 = { x: 100, y: 200 };
        const p2 = { x: 400, y: 100 };
        const expected = [ { x: 250, y: 200 }, { x: 325, y: 150 } ];
        expect(controlPoints(p1, p2)).toEqual(expected);
    });

    test('should return rounded control point coordinates when resultant numbers are fractional', () => {
        const p1 = { x: 103, y: 198 };
        const p2 = { x: 398, y: 99 };
        const expected = [ { x: 251, y: 198 }, { x: 325, y: 149 } ];
        expect(controlPoints(p1, p2)).toEqual(expected);
    });
});

describe('mapToCanvas', () => {
    const width = 100, height = 100;
    const padding = 20;

    describe('present asset', () => {
        test('should map a zero value to the bottom of the canvas', () => {
            const presentAsset: Asset = { time: 'present', value: 0 };
            expect(mapToCanvas(width, height, 909, presentAsset)).toEqual({
                x: padding,
                y: height - padding
            });
        });

        test('should map the max value to the top of the canvas', () => {
            const presentAsset: Asset = { time: 'present', value: 300 };
            expect(mapToCanvas(width, height, presentAsset.value, presentAsset)).toEqual({
                x: padding,
                y: padding
            });
        });

        test('should round the mapped value to an integer if it is fractional', () => {
            const presentAsset: Asset = { time: 'present', value: 300 };
            const max = presentAsset.value + 23;
            expect(mapToCanvas(width, height, max, presentAsset)).toEqual({
                x: padding,
                y: 24
            });
        });
    });

    describe('future asset', () => {
        test('should map a zero value to the bottom of the canvas', () => {
            const futureAsset: Asset = { time: 'future', value: 0 };
            expect(mapToCanvas(width, height, 707, futureAsset)).toEqual({
                x: width - padding,
                y: height - padding
            });
        });

        test('should map the max value to the top of the canvas', () => {
            const futureAsset: Asset = { time: 'future', value: 300 };
            expect(mapToCanvas(width, height, futureAsset.value, futureAsset)).toEqual({
                x: width - padding,
                y: padding
            });
        });

        test('should round the mapped value to an integer if it is fractional', () => {
            const futureAsset: Asset = { time: 'future', value: 300 };
            const max = futureAsset.value + 37;
            expect(mapToCanvas(width, height, max, futureAsset)).toEqual({
                x: width - padding,
                y: 27
            });
        });
    });
});

describe('mapToAssetValue', () => {
    const width = 100, height = 100;
    const padding = 20;

    test('should map bottom of the canvas to zero', () => {
        const yCoord = height - padding;
        expect(mapToAssetValue(width, height, 987, yCoord)).toBe(0);
    });

    test('should map top of the canvas to the max value', () => {
        const yCoord = padding;
        const max = 900;
        expect(mapToAssetValue(width, height, max, yCoord)).toBe(max);
    });

    test('should round the mapped value to 2 decimal places if it is fractional', () => {
        const yCoord = padding + 31;
        const max = 917;
        expect(mapToAssetValue(width, height, max, yCoord)).toBe(443.22);
    })
});
