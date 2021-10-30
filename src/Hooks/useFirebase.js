import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import firebaseAuthntication from "../Firebase/firebase.init";

// firebase authentication called here 
firebaseAuthntication();

// firebase main hook here 
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // getting the signin user inf o here 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
    }, []);

    // signin with goole handler here 
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .catch(error => setError(error.message))
    }

    // logout button here 
    // const logOutUser => {

    // }

    // return here 
    return {
        user,
        error,
        googleSignIn,

    }
}

export default useFirebase;