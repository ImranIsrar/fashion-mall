import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = "pk_test_51LkC6FEmy1tRK446jYm17rYIWSB5zOt2VpNHMZaC3Uy9gpNDpmkyKa6vsDSVGzMr4te88ZXQTMdb4avUf80feBb500n0R5cAFr";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  )
}

export default StripeContainer
