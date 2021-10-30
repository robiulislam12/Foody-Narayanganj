import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from "react";
import app from "../firebase";

//Enable firebase
app()


const useFirebase = () =>{
    //State Control
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    //Firebase Auth 
    const auth = getAuth();

    //Google Sign in function
    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider()
        
        //Sign In with firebase Popup
       return  signInWithPopup(auth, googleProvider)
        
    }

    //Observed User 
    useEffect(() =>{
        const unsubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return unsubscribed
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    //Log out User 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            //User Empty
            setUser({})
        }).catch(error => {
            setError(error.message)
        }).finally(() => setIsLoading(false))
    }

    return {
        user,
        error,
        isLoading,
        logOut,
        setError,
        signInUsingGoogle,
    }
}

/* Export FireBase */
export default useFirebase;
