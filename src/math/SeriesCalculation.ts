export class SeriesCalculation {
    constructor() {
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
    private static _fibonacciSeriesElement(n: number): number {
        if (n < 0) {
            throw new Error("n must be 0 or greater.");
        }
        // First two elements of the serie
        let fibonacciSecondLastElement: number = 0;
        let fibonacciLastElement: number = 1;
        if (n === 0) {
            return fibonacciSecondLastElement;
        }
        if (n === 1) {
            return fibonacciLastElement;
        }
        // I haven't used the array because I just need the  result, not all the elements of the serie.
        let result: number = 0;
        let iterator: number = 2;
        while (iterator <= n) {
            result = fibonacciLastElement + fibonacciSecondLastElement;
            fibonacciSecondLastElement = fibonacciLastElement;
            fibonacciLastElement = result;
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
        return (2 * SeriesCalculation._triangularNumber(n - 2))
            * (3 * SeriesCalculation._primeNumber(n - 2))
            * (7 * SeriesCalculation._fibonacciSeriesElement(n - 1))
    }
}
