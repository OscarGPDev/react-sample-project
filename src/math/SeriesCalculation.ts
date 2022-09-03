export class SeriesCalculation {
    constructor() {
    }

    _triangularNumber(n: number): number {
        return (n * (n + 1)) / 2;
    }

    // _primeNumber(n: number): number {
    // }

    _fibonacciSeriesElement(n: number): number {
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        let fibonacciSecondLastElement: number = 0;
        let fibonacciLastElement: number = 1;
        let result: number = 0;
        let iterator: number = 2;
        while (iterator <= n) {
            result = fibonacciLastElement + fibonacciSecondLastElement;
            fibonacciSecondLastElement = fibonacciLastElement;
            fibonacciLastElement = result;
        }

        return result;
    }

    calcSeriesTerm(n: number): number {
        return (2 * this._triangularNumber(n - 2))
            // * (3 * this._primeNumber(n - 2))
            * (7 * this._fibonacciSeriesElement(n - 1))
    }
}
