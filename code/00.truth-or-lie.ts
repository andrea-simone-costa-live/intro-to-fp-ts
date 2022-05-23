// 2. annotate function return types
// 3. define total functions
// 4. when possible, prefer polymorphic functions
// 5. use "type-driven dev": `declare function`
import { nonEmptyArray } from "fp-ts";
import { NonEmptyArray } from "fp-ts/NonEmptyArray";

// Can we implement it?

export declare function head<A>(as: Array<A>): A;

export function head1<A>(as: Array<A>): A {
  return as[0];
}

// A safer version would be:

// --noUncheckedIndexedAccess

export function head2<A>(as: Array<A>): A | undefined {
  return as[0];
}

export function head3<A>(as: NonEmptyArray<A>): A {
  return as[0];
}

head3([])
head3([1,2,3])