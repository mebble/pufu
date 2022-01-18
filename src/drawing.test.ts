import type { Asset } from './types';
import { controlPoints, mapToCanvas } from './drawing';

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
    });

    describe('future asset', () => {
        test('should map a zero value to the bottom of the canvas', () => {
            const futureAsset: Asset = { time: 'future', value: 0 };
            expect(mapToCanvas(width, height, 707, futureAsset)).toEqual({
                x: width - padding,
                y: height - padding
            });
        });
    });
});
