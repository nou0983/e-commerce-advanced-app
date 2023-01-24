import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";
import { useCartContext } from "../../contexts/cartContext.context";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { formatPrice } from "../../utils/helper.utils";
import { useNavigate } from "react-router-dom";
import "./stripeCheckout.styles.scss";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = () => {
  const { total, shippingFee, clearCart } = useCartContext();
  const { isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const createPaymentIntent = async () => {
    try {
      const response = await axios.post(
        "/.netlify/functions/create-payment-intent",
        {
          total,
          shippingFee,
        }
      );
      setClientSecret(response.data.clientSecret);
    } catch (error) {}
  };

  // Create PaymentIntent as soon as the page loads
  useEffect(() => {
    createPaymentIntent();
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        fontFamily: "Arial, sans-serif",
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError("");
      setSucceeded(true);
      setProcessing(false);
      setTimeout(() => {
        clearCart();
        navigate("/");
      }, 5000);
    }
  };

  return (
    <div className="payment-form-container">
      {succeeded ? (
        <article>
          <h4>Thank you, your payment was successful!</h4>
          <h4>Redirecting to home page shortly ...</h4>
        </article>
      ) : (
        <article>
          <h4>Hello, {user && user.name}</h4>
          <p>Your total is {formatPrice(total + shippingFee)}</p>
        </article>
      )}
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
        <button disabled={processing || disabled || succeeded} id="submit">
          <span id="button-text">
            {processing ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        {/* Show a success message upon completion */}
        <p className={succeeded ? "result-message" : "result-message hidden"}>
          Payment succeeded, see the result in your
          <a href={`https://dashboard.stripe.com/test/payments`}>
            {" "}
            Stripe dashboard.
          </a>{" "}
          Refresh the page to pay again.
        </p>
      </form>
    </div>
  );
};

const StripeCheckout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};
export default StripeCheckout;
