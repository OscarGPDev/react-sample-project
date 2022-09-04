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
test('f(4)', () => {
    const seriesCalculation = new SeriesCalculation();
    expect(seriesCalculation.calcSeriesTerm(4)).toEqual(756);
});
test('f(5)', () => {
    const seriesCalculation = new SeriesCalculation();
    expect(seriesCalculation.calcSeriesTerm(5)).toEqual(3780);
});
test('f(6)', () => {
    const seriesCalculation = new SeriesCalculation();
    expect(seriesCalculation.calcSeriesTerm(6)).toEqual(14700);
});
test('f(7)', () => {
    const seriesCalculation = new SeriesCalculation();
    expect(seriesCalculation.calcSeriesTerm(7)).toEqual(55440);
});
test('f(8)', () => {
    const seriesCalculation = new SeriesCalculation();
    expect(seriesCalculation.calcSeriesTerm(8)).toEqual(149058);
});
test('f(9)', () => {
    const seriesCalculation = new SeriesCalculation();
    expect(seriesCalculation.calcSeriesTerm(9)).toEqual(419832);
});
test('f(10)', () => {
    const seriesCalculation = new SeriesCalculation();
    expect(seriesCalculation.calcSeriesTerm(10)).toEqual(976752);
});
