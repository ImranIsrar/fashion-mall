import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useStateValue } from '../Global/CartContext';
import { useNavigate } from "react-router-dom";


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}


const PaymentForm = () => {

  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [{totalPrice}] = useStateValue();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });

    console.log('paymentMethod >>>', paymentMethod);

    if(!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
            amount: totalPrice * 100,
            id: id,
            productName: 'FashionMall Products'
        });
        console.log('response>>>', response);
        
        if(response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
          navigate('/thank-you');
        }


      } catch (error) {
        console.log("Error >>>" , error);
      }
    } else {
      console.log(error.message);
    }
  }


  return (
    <>
      <form className="payment-form" onSubmit={handleSubmit}>
        <fieldset className='FormGroup'>
          <div className="FormRow">
            <CardElement options={CARD_OPTIONS} />
          </div>
        </fieldset>
        <button>
          Pay
        </button>
      </form>
    </>
  )
}

export default PaymentForm
