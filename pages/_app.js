import "@/styles/globals.css";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from '../firebase';
import Login from './Login'
import Loading from './Loading'
import { useEffect } from'react';
import firebase from 'firebase/compat/app';

export default function App({ Component, pageProps }) {
      const [ user, loading] = useAuthState(auth);

      useEffect(() => {

        if (user) {
          db.collection('users').doc(user.id).set({
            email: user.email, 
            lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
            photoURL: user.photoURL
          }, {merge: true})

        }   
        
      }, [user]);

      if (loading) return <Loading/>;
      if (!user) return <Login/>
  return <Component {...pageProps} />;
}
