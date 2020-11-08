import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducer.js';
import cartReducer from './cart/cart-reducer.js';
import directoryReducer from './directory/directory-reducer.js';
import shopReducer from './shop/shop-reducer.js';

const persistConfig={ //this is just possible configuration we want inorder to setup our redux-persist to use
	key:'root',//its basically means at point inside our application we want to start storing things from root 
	storage,
	whitelist:['cart'] //its basically stores the string name of our reducers we want to store

}

const rootReducer=combineReducers({
	user:userReducer,
	cart:cartReducer,
	directory:directoryReducer,
	shop:shopReducer
})


export default persistReducer(persistConfig,rootReducer);//this will return us modified version of rootReducer with persistConfig on top of it.

