import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseAuthntication from "../Firebase/firebase.init";

// firebase authentication called here 
firebaseAuthntication();

// firebase main hook here 
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

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
            setLoading(false);
        })
    }, []);

    // signin with goole handler here 
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setLoading(false))
    }

    // logout button here 
    const logOutUser = () => {
        return signOut(auth)
    }

    // return here 
    return {
        user,
        error,
        setUser,
        loading,
        setError,
        googleSignIn,
        logOutUser
    }
}

export default useFirebase;