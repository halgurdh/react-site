import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_live_51LTLZNFzJRteYi3Ekotw0xSrTzRmEzbUVINnbeF4RfftoGwnno9acr1p5vOa0Wi3yhjSlOk6kYfsdojfLcKn1zAm00ALJiqoKZ"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}