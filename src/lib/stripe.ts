import Stripe from "stripe";

let environment: string = process.env.STRIPE_SECRET_KEY ?? ''

export const getEnvironmentVariable = (env:string) => {
  if(process.env.STRIPE_SECRET_KEY) {
    return environment
  } else{
    throw new Error(`${env} environment variable is not set`)
  }
}

export const stripe = new Stripe(getEnvironmentVariable(environment), {
  apiVersion: "2022-11-15",
  appInfo: {
    name: "Ignite Shop",
  },
});
