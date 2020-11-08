import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils.js';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-Icon-component/cart-Icon.component.jsx';
import CartDropDown from '../cart-dropdown/cart-dropdown.component.jsx';
import {selectCurrentUser} from '../../redux/user/user-selectors.js';
import {selectCartHidden} from '../../redux/cart/cart-selectors.js';


import './header-component.styles.scss';


const Header=({currentUser,toggle})=>(
	<div className='header'>
	  <Link className='logo-container' to='/'>
	     <Logo className='logo'/>
	  </Link>
	  <div className='options'>
	    <Link className='option' to='/shop'>
	     SHOP
	    </Link>
	    <Link className='option' to='/contact'>
	     CONTACT
	    </Link>
	    {
	    	currentUser?<div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>:
	    	<Link className='option' to='/sign-in'>SIGN IN</Link>
	    }
	    <CartIcon/>
	  </div>
	  {
	  	toggle?null:<CartDropDown/>
	  }
	  
	</div>
)
const mapStateToProps=createStructuredSelector({
	currentUser:selectCurrentUser,
	toggle:selectCartHidden
});


export default connect(mapStateToProps)(Header);