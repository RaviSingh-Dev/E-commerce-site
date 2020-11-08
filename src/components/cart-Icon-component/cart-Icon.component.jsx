import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {toggleCarthidden} from '../../redux/cart/cart-action.js';
import {selectCartItemsCount} from '../../redux/cart/cart-selectors.js';
import './cart-Icon.component.scss';

const CartIcon=({toggleCarthidden,itemCounts})=>(

	<div className='cart-icon' onClick={toggleCarthidden}>
	  <ShoppingIcon className='shopping-icon'/>
	  <span className='item-count'>{itemCounts}</span>
	</div>
)


const mapDispatchToProps=dispatch=>({
	toggleCarthidden:()=>dispatch(toggleCarthidden())
})

const mapStateToProps=createStructuredSelector({ 
   itemCounts:selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);