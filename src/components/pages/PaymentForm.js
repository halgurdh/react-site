import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import '../../App.css'


export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "ideal",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount: 1000,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
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
        {!success ? 
        <form onSubmit={handleSubmit}>
            <div className="Form">
                <div className="FromRow">
                    <td className="tableData">
                        <tr><label>
                            Naam
                        </label></tr>
                        <tr><input type ='text'/></tr>
                        
                        <tr><label>
                            Achternaam
                        </label></tr>
                        <tr><input type ='text'/></tr>
                        <tr><label>
                            Straat
                        </label></tr>
                        <tr><input type ='text'/></tr>
                        <tr><label>
                            Nummer
                        </label></tr>
                        <tr><input type ='number'/></tr>
                        <tr><label>
                            Toevoeging
                        </label></tr>
                        <tr><input type ='text'/></tr>
                        <tr><label>
                            PostCode
                        </label></tr>
                        <tr><input type ='text'/></tr>
                        <tr><label>
                            Plaats
                        </label></tr>
                        <tr><input type ='text'/></tr>
                        <br/>
                        <button>Pay</button>
                    </td>
                </div>
            </div>
        </form>
        :
       <div>
           <h2>You just bought a one of our tours congrats this is the best decision of you're life</h2>
       </div> 
        }
            
        </>
    )
}