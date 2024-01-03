"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../componenets/Home/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';


const Payment = () => {
    const searchParams = useSearchParams();
    const amount = searchParams.get('amount');

    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);
    const options = {
        mode: 'payment',
        amount: Math.round(amount * 100),
        currency:'inr'
    }
  return (
    <>
          <Elements stripe={stripePromise} options={options} >
              <CheckoutForm amount={amount} />
            </Elements>
          
    </>
  )
}

export default Payment
