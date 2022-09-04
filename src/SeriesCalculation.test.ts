import {SeriesCalculation} from "./math/SeriesCalculation";
import {expect, test} from '@jest/globals';

test('f(1)', () => {
    const seriesCalculation = new SeriesCalculation();
    expect(() => seriesCalculation.calcSeriesTerm(1)).toThrow(Error);
});
test('f(2)', () => {
    const seriesCalculation = new SeriesCalculation();
    expect(seriesCalculation.calcSeriesTerm(2)).toEqual(0);
});
test('f(3)', () => {
    const seriesCalculation = new SeriesCalculation();
    expect(seriesCalculation.calcSeriesTerm(3)).toEqual(84);
});
