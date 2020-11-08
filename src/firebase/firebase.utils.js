
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config={
    apiKey: "AIzaSyCHLTRy1E8j4fQpdlf7u1UxcdHTKTb4Vw4",
    authDomain: "crwn-db-1e01c.firebaseapp.com",
    databaseURL: "https://crwn-db-1e01c.firebaseio.com",
    projectId: "crwn-db-1e01c",
    storageBucket: "crwn-db-1e01c.appspot.com",
    messagingSenderId: "268657499769",
    appId: "1:268657499769:web:a7b70436bcbfc0d3577ea8"
  };

  export const createUserProfileDocument=async(userAuth,additionalData)=>{
  	if(!userAuth)return;

  	const userRef= firestore.doc(`users/${userAuth.uid}`);

  	const snapShot = await userRef.get()

  
    if(!snapShot.exists){
    	const{displayName,email}=userAuth;
    	const createdAt= new Date();


    	try{
       await userRef.set({
    		displayName,
    		email,
    		createdAt,
    		...additionalData
    	})
    	}catch(error){
    		console.log('error in creating user document',error.message);
    	}
    }
    return userRef;
  };

 firebase.initializeApp(config);

 export const auth = firebase.auth();// taking out auth from firebase
 export const firestore = firebase.firestore();// taking out firestore from firebase

 const provider = new firebase.auth.GoogleAuthProvider();//we are taking out googleauthhprovider class from auth librayry

 provider.setCustomParameters({prompt:'select_account'});// over here it takes some custom paramters

 export const signInWithGoogle=()=>auth.signInWithPopup(provider);

 export default firebase;

