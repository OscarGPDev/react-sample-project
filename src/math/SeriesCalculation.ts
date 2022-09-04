export class SeriesCalculation {
    private readonly _fibonacciSeriesElements: Array<number>;
    private _lastNFibonacciCalculated: number;

    constructor() {
        this._fibonacciSeriesElements = [0, 1];
        this._lastNFibonacciCalculated = 1;
    }

    /**
     * Private method that returns the n-th triangular number.
     * @param n{number} n-th desired triangular number; n must be 0 or greater.
     * */
    private static _triangularNumber(n: number): number {
        if (n < 0) {
            throw new Error("n must be 0 or greater.");
        }
        // Triangular numer is calculated this way https://es.wikipedia.org/wiki/N%C3%BAmero_triangular
        return (n * (n + 1)) / 2;
    }

    /**
     * Private method that returns the n-th prime number.
     * @param n{number} n-th desired prime; n must be 0 or greater.
     */
    private static _primeNumber(n: number): number {
        if (n < 0) {
            throw new Error("n must be 0 or greater.");
        }
        // Take 0 as the 0 prime number
        if (n === 0) {
            return 0;
        }
        // Take 2 as the 1st prime number
        if (n === 1) {
            return 2;
        }
        // Take 3 as the 2nd prime number
        if (n === 2) {
            return 3;
        }
        // Every prime number larger than 3 is of the form 6N-1 or 6N+1, where N is a natural number.
        // BUT having the first 2 prime numbers I had to adapt the models, here they are.
        if (n % 2 !== 0) {
            return 6 * (Math.ceil((n - 2) / 2)) - 1;
        }
        return 6 * (Math.ceil((n - 2) / 2)) + 1;
    }

    /**
     * Private method that returns the n-th element of the Fibonacci series.
     * @param n{number} n-th desired term from the Fibonacci series; n must be 0 or greater.
     */
    private _fibonacciSeriesElement(n: number): number {
        if (n < 0) {
            throw new Error("n must be 0 or greater.");
        }
        // First two elements of the serie
        let fibonacciSecondLastElement: number = this._fibonacciSeriesElements[0];
        let fibonacciLastElement: number = this._fibonacciSeriesElements[1];
        let result: number = 0;
        let iterator: number = 2;
        if (n === 0) {
            return fibonacciSecondLastElement;
        }
        if (n === 1) {
            return fibonacciLastElement;
        }
        if (n <= this._lastNFibonacciCalculated) {
            return this._fibonacciSeriesElements[n];
        } else {
            fibonacciSecondLastElement = this._fibonacciSeriesElements[this._lastNFibonacciCalculated - 1];
            fibonacciLastElement = this._fibonacciSeriesElements[this._lastNFibonacciCalculated];
            iterator = this._lastNFibonacciCalculated;
        }

        while (iterator <= n) {
            result = fibonacciLastElement + fibonacciSecondLastElement;
            fibonacciSecondLastElement = fibonacciLastElement;
            fibonacciLastElement = result;
            if (n > this._lastNFibonacciCalculated) {
                this._fibonacciSeriesElements.push(result);
                this._lastNFibonacciCalculated += 1;
            }
            iterator++;
        }

        return result;
    }

    /**
     * Returns the n-th term of the following series:
     * f(n) = 2 triangular(n - 2) * 3 primeNumber(n - 2) * 7 fibonacci(n - 1)
     * @param n{number} n-th desired term from the series; n must be 0 or greater.
     * */
    calcSeriesTerm(n: number): number {
        if (!Number.isInteger(n)) {
            throw new Error("El valor no es un número");
        }
        return (2 * SeriesCalculation._triangularNumber(n - 2))
            * (3 * SeriesCalculation._primeNumber(n - 2))
            * (7 * this._fibonacciSeriesElement(n - 1))
    }
}
