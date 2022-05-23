import { pipe, flow } from "fp-ts/function";

export declare function length(a: string): number;
export declare function double(a: string): string;

export const result0 = length(double("foo"));

//
//
//
//
// using the `|>` operator:

// const result1 = "foo" |> double |> length

//
//
//
// using `pipe`:

export const result1 = pipe("foo", double, length);

//
//
//
// same using `flow`:

const doubleLength = flow(double, length);

export const result2 = doubleLength("foo");
