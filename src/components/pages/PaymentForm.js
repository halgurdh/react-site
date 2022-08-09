import React, { useState } from 'react'
import '../../App.css'


export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)

    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        if(re.test(email)) {
            console.log("true email")
        }
        return re.test(email);
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
                        <tr><input id='name' type ='text' placeholder="Tom de Jong"/></tr>
                   
                        <tr><label>
                            email
                        </label></tr>
                        <tr><input id='email' type ='text' placeholder="tom.de.jong@gmail.com"/></tr>
                        <br/>
                        <button type='submit' onClick={handleSubmit}>Pay</button>
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