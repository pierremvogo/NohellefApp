import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#000",
            background: "black",
			fontWeight: 700,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
            border: "2px solid black",
		},
		invalid: {
			iconColor: "red",
			color: "white"
		}
	}
}

export default function PaymentForm() {
    const [confirm, setConfirm ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:5000/pay", {
                amount: 1000,
                id
            })

            if(response.data.success) {
                setConfirm(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
     
        <form onSubmit={handleSubmit}>
            
                <div className="container">
                    <div className="row" style={{margin: "30px auto"}}>
                        <div className="col-12">
                           <CardElement options={CARD_OPTIONS}/> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                             <button className="btn btn-primary btn-large">Pay</button>
                        </div>
                    </div>
                    
                </div>
            
           
        </form>
    
           
        </>
    )
}