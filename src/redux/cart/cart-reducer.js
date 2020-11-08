import {cartActionTypes} from './cart-types.js';
import {addItemToCart} from './cart-utils.js';
import{removeItemFromCart} from './cart-utils.js';

const INITIAL_STATE={
	toggle:true,
  cartItems:[]
}

const cartReducer=(state=INITIAL_STATE,action)=>{
   switch(action.type){
   	case cartActionTypes.TOGGLE_DROP_DOWN:
   		return {
   			...state,
   			toggle:!state.toggle
   		}
      case cartActionTypes.ADD_ITEM:
      return{
        ...state,
        cartItems:addItemToCart(state.cartItems,action.payload)
      }

      case cartActionTypes.CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems:state.cartItems.filter(cartItem=>cartItem.id!==action.payload.id)
      }
      case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems:removeItemFromCart(state.cartItems,action.payload)
      }
       default:
       return state;
   }
}
export default cartReducer;