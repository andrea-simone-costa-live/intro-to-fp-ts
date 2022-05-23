import {
  ConfirmRent,
  OnlinePayment,
  PickupPayment,
} from "./12.sum";
import { identity, pipe } from "fp-ts/function";

// per i sum type, gestisce i 2+ casi
function fold<R>(match: {
  online: (onlinePayment: OnlinePayment) => R;
  pickup: (pickupPayment: PickupPayment) => R;
}): (rentSubmit: ConfirmRent) => R {
  return rentSubmit => {
    switch (rentSubmit.paymentMode) {
      case "online":
        return match.online(rentSubmit);
      case "pickup":
        return match.pickup(rentSubmit);
    }
  };
}

export function renderConfirmation(
  rentSubmit: ConfirmRent
): string {
  return pipe(
    rentSubmit,
    fold({
      online: ({ email }) =>
        `Payment confirmation sent to ${email}`,
      pickup: () => "You will pay at pickup",
    })
  );
}

// The name "fold" is not arbitrary:
// many different Sum types available in fp-ts follow this
// naming convention

// Let's have a look at how Option is defined in fp-ts:
import * as option from "fp-ts/Option";
// type Option<A> = Some<A> | None
// type Some<A> = { value: A, type: "some" }
// type None = { type: "none" }

// type Either<E, A> = Left<E> | Right<A>
// type Left<E> = { error: E, type: "left" }
// type Right<A> = { value: A, type: "right" }

import { AgeRange } from "./10.domain";

declare const ageRange: AgeRange | undefined;

export const result = pipe(
  ageRange,
  option.fromNullable,
  option.fold(() => "Unknown", identity)
);

// same as:

// export const result = pipe(
//   ageRange,
//   option.fromNullable,
//   option.getOrElse(() => "Unknown")
// );
