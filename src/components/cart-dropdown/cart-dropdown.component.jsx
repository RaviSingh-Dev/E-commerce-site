import React from 'react';
import {connect}from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector}  from 'reselect';
import CartItem from '../cart-Item/cart-Item.jsx';
import {selectCartItems} from'../../redux/cart/cart-selectors.js';
import {toggleCarthidden} from '../../redux/cart/cart-action.js';

import CustomButton from '../custom-button-component/custom-button-component.jsx';


import './cart-dropdown.component.scss';

const CartDropDown=({cartItems,history,dispatch})=>(
	<div className='cart-dropdown'>
	  <div className='cart-items'>
	    {
	    	cartItems.length?(
	    	cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem}/>)):
	    	<span className='empty-message'>Your Cart is Empty</span>

	    }
	  </div>
	  <CustomButton onClick={()=>{history.push('/checkout');
	      dispatch(toggleCarthidden())
	   }}>GO TO CHECKOUT</CustomButton>
	</div>
	)

const mapStateToProps=createStructuredSelector({
	cartItems:selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropDown));