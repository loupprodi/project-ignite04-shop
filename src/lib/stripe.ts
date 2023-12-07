import Stripe from "stripe";


const stripeKey = process.env.STRIPE_SECRET_KEY == 'live' ? process.env.STRIPE_PUBLIC_KEY : process.env.STRIPE_TEST_KEY

if (typeof stripeKey !== 'string') throw new Error('Stripe key not found')

export const stripe = new Stripe(stripeKey, {
  apiVersion: "2022-11-15",
  appInfo: {
    name: 'Ignite Shop',
  }
})


