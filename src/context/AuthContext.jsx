import React, { createContext, useContext, useEffect, useState } from 'react'
import {auth, db} from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import {doc, setDoc} from 'firebase/firestore'

const UserContext = createContext()

export const AuthContextProvider = ({children})=>{

    const [user, setUser] = useState({})
    const signup = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        return setDoc(doc(db, 'users', email),{
            watchlist: [],
        })
    }

    const signin = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout =()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (currentuser)=>{
            setUser(currentuser)
        })
        return ()=>{
            unsub()
        }
    },[])

    return(
        <UserContext.Provider value={{signup, signin, logout, user}}>{children}</UserContext.Provider>
    )

}
export const userAuth=()=>{
    return useContext(UserContext)
}