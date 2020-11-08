import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton=({price})=>{
	const priceForstripe= price*100;
	const publishableKey ='pk_test_51Hk96LEkA3CRHBpAevcacJGfFGwdPsEbVHFFPyJxK4D9HMEPbLdUUCPEpX1wwMY8ZtnP3QlLXBwQkVunGnRHeiER00z2zR3gpK';
	const onToken=token=>{
		console.log(token);
		alert('Payment is successful');
	}
	return(
		<StripeCheckout 
		    name="crwn clothing Ltd." // the pop-in header title
	        description={`Your total is $${price}`} // the pop-in header subtitle
	        image="https://sendeyo.com/up/d/f3eb2117da" // the pop-in header image (default none)
	        label="Pay Now" // text inside the Stripe button
	        panelLabel= "Pay Now"// prepended to the amount in the bottom pay button
	        amount={priceForstripe} // cents
	        stripeKey={publishableKey}
	 // Note: Enabling either address option will give the user the ability to
	  // fill out both. Addresses are sent as a second parameter in the token callback.
	        shippingAddress
	        billingAddress
	        token={onToken}
	        />// submit callback  
		);
};

export default StripeCheckoutButton;