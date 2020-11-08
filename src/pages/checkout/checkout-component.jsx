import React from 'react';
import {connect} from 'react-redux';
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart-selectors.js';
import {createStructuredSelector} from 'reselect';
import CheckoutItem from '../../components/checkout/checkout-item-component.jsx';
import StripeCheckoutButton from '../../components/stripe-payment-component/stripe-payment-component.jsx';

import './checkout-styles.scss';

const checkOutPage=({cartItems,total})=>(
   <div className='checkout-page'>
     <div className='checkout-header'>
       <div className='header-block'>
         <span>Product</span>
       </div>
       <div className='header-block'>
         <span>Description </span>
       </div>
       <div className='header-block'>
         <span>Quantity</span>
       </div>
       <div className='header-block'>
         <span>Price</span>
       </div>
       <div className='header-block'>
         <span>Remove</span>
       </div>
     </div> 
     {
     	cartItems.map(cartItem=><CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
     }
     <div className='total'>Total:${total}</div>
     <div className='test-warning'>
        *Please use the following credit-card for the Payments*
        <br/>
        4242 4242 4242 4242 -Exp: 01/23 - CVV: 123
     </div>
     <StripeCheckoutButton price={total}/>
   </div>
)


const mapStateToProps=createStructuredSelector({
	cartItems:selectCartItems,
	total:selectCartTotal
})

export default connect(mapStateToProps)(checkOutPage);