import React, { useEffect, useRef } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const PayPal = ({mount}) => {
    const paypal = useRef();
    useEffect(() =>{
    },[])
    const initialOptions = {
        "client-id": "AYzGF9gHoeHL5-Mu2q8rRYE2RPZarRF-_xZESZDCddoucjV_gjjjlJcEY_Af9bS7pFfSVIXfcf5dmuoy",
         currency: "EUR",
     }; 
    return (
            <PayPalScriptProvider  options={initialOptions}>
                <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                        {
                            description: 'Purchase Units',
                            amount: {
                                currency_code: "EUR",
                                value: mount
                            }
                        }
                    ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        console.log(`Transaction completed by ${name}`);
                        console.log(details);
                    });
                }}
            />
            </PayPalScriptProvider>
        
    )
}


export default PayPal;