import React from 'react'
import './Home.css';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

const Home = (props) => {
    const Donate = 100; 
    return (
        <div className="background">
            <div className="Homepage">
                <h3 className="upper"><b>“ Together We Can ” <br /> Helping Hands for better tomorrow </b></h3>
                <br />
                <p className="par"> We are on a mission to change lives.<br /> We bridge the gap between two sets of people - people who want to give, who want to try and make a difference along with those who are doing phenomenal work but don’t know how to reach out to the people who want to support them.</p>
                {/* <button type="button" id="btn" className="btn btn-outline-dark">Donate ₹500.00/-  </button> */}
            </div>
            <div className="bttn">
                <StripeCheckoutButton className="btn" price={Donate} />
            </div>
        </div>
    )
}

export default Home
