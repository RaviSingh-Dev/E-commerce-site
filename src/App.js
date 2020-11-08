import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './App.css';
import {selectCurrentUser} from './redux/user/user-selectors.js';

import HomePage from './pages/homepage/homepage-component.jsx';
import ShopPage from './pages/shop/shop-component.jsx';
import Header from './components/header-component/header-component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up-component.jsx';
import checkOutPage from './pages/checkout/checkout-component.jsx';


import {auth,createUserProfileDocument} from './firebase/firebase.utils.js';
import {setCurrentUser} from './redux/user/user.action.js';


class App extends Component{
unsubscribeFromAuth=null;

 componentDidMount(){
       const{setCurrentUser}=this.props;
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
        if(userAuth){
            const userRef= await createUserProfileDocument(userAuth);

            userRef.onSnapshot(snapShot=>{
                    setCurrentUser({
                        id:snapShot.id,
                        ...snapShot.data(),
                    })
            })
        }else{
            setCurrentUser(userAuth)
        }
        
      })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

    render(){
        return ( 
            <div>
              <Header/>
              <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route exact path ='/checkout' component={checkOutPage}/>
                <Route path='/sign-in' render={()=>this.props.currentUser?
                    (<Redirect to='/'/>): (<SignInAndSignUp/>)}/>
              </Switch>
            </div>
        );
    }
}

const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser
})

const mapDispatchToProps=dispatch=>({
    setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);