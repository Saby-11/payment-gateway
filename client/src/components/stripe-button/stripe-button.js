import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import Axios from "axios";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51I56TeCPpn7AB7vhaLxqYWXqc0XHHTijYnHImHsVC5QArXg0XZShPECrzMpuEB2g5XBr3p5rEbpBJOh6IQUzRAkp00Nxv8i9Si'

    const onToken = token => {
        const data =  token.email;
        Axios.post("/mail", {data} ).then((res) => console.log("success")).catch((e) => console.log(e));
        console.log(token.email);
        alert('Payment Successful');
    }


    return (
        <StripeCheckout
            label='Donate Here'
            name='BLESS CLUB'
            billingAddress
            shippingAddress
            image='https://www.flaticon.com/svg/static/icons/svg/1051/1051454.svg'
            description='Helping Hands for a better tomorrow'
            amount={priceForStripe}
            panelLabel='Donate Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton