import {cartActionTypes} from './cart-types.js';

export const toggleCarthidden=()=>({
	type:cartActionTypes.TOGGLE_DROP_DOWN
});

export const addItem=item=>({
	type:cartActionTypes.ADD_ITEM,
	payload:item
})

export const removeItem=item=>({
	type:cartActionTypes.REMOVE_ITEM,
	payload:item
})

export const clearCartItem=item=>({

	type:cartActionTypes.CLEAR_CART_ITEM,
	payload:item
})

