import React, { useState, useEffect, useContext } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}
export function AuthProvider({ children }) {
    const [ currentUser, setCurrentUser ] = useState(null)
    const [ isLoggedIn, setUserLoggedIn] = useState(false)
    const [ isLoading, setLoading ] = useState(true)

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe
    }, [])
    async function initializeUser(user) {
        if(user) {
            setCurrentUser({ ...user })
            setUserLoggedIn(true)
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }
    const value = {
        currentUser,
        isLoggedIn,
        isLoading
    }
    return(
        <AuthContext.Provider value={ value }>
            {!isLoading && children}
        </AuthContext.Provider>
    )
}