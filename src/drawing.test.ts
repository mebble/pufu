import { controlPoints } from './drawing';

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
