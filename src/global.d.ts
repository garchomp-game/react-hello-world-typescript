/// <reference path="comonGlobal.d.ts" />

// ここどうしたらいいのかわからない…anyではなくmethod名にしたいけど…

/**
 * @category App Component interface
 */
interface AppState {
    counters: Array<CounterInterface>
    total: number
}

/**
 * @category CounterList Component interface
 */
interface CounterListProps {
    counters: Array<CounterInterface>;
    countUp: function;
}

/**
 * @category Counter Component interface
 */
interface CounterProps {
    counter: CounterInterface
    countUp: function
}