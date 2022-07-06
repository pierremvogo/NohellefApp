import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentOption from "./paymentOption";

const PUBLIC_KEY = "pk_test_51LDpCJGqSEH4RiIJwfVxaVQqFWUO0xXYxUbHEVRaQsex9tLC8602qIrxAH0g8RrvYkj6rAmVBD8o5IQVjf6YVBVu00RH4WCBcp"

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentOption />
		</Elements>
	)
}