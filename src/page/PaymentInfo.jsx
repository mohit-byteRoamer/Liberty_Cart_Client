import { Elements, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
   "pk_test_51QWs6LJczfxT2lp9NfSkGccxF20yMFFVj3yGkPoLdTKuJXTmbzkvtt1GOLdYQmR4AAFHN74V5lwPsl5LpiJEh9fg00oK4dUkvh"
);

export default function PaymentInfo() {
   const location = useLocation();
   console.log("Location", location.state.paymentSuccessString);
   const options = {
      // passing the client secret obtained from the server
      clientSecret: location.state.paymentSuccessString,
   };

   return (
      <Elements stripe={stripePromise} options={options}>
         <CheckoutForm />
      </Elements>
   );
}

import { PaymentElement } from "@stripe/react-stripe-js";
import { Button } from "antd";
import toast from "react-hot-toast";
import { useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
   const elements = useElements();
   const stripe = useStripe();
   const handleSubmit = async (event) => {
      event.preventDefault();

      console.log("elements", elements);
      if (!stripe || !elements) {
         // Stripe.js hasn't yet loaded.
         // Make sure to disable form submission until Stripe.js has loaded.
         return;
      }

      const result = await stripe.confirmPayment({

         //`Elements` instance that was used to create the Payment Element
         elements,
         confirmParams: {
            return_url: "window.location.origin",
         },
         redirect: "if_required",
      });

      if (result.error) {
         // Show error to your customer (for example, payment details incomplete)
         console.log(result.error.message);
      } else {
         toast.success("Payment Successful");
         // Your customer will be redirected to your `return_url`. For some payment
         // methods like iDEAL, your customer will be redirected to an intermediate
         // site first to authorize the payment, then redirected to the `return_url`.
      }
   };
   return (
      <form onSubmit={handleSubmit}>
         <PaymentElement />
         <Button type="primary">Submit</Button>
      </form>
   );
};
