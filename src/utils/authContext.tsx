import { IS_LOGGED_IN, ONBOARDING_COMPLETE } from "constants/storage";
import { router } from "expo-router";
import { useStorage } from "hooks/use-storage";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

type AuthState = {
    isLoggedIn: boolean;
    isOnboarded: boolean;
    logIn: () => void;
    logOut: () => void;
    handleOnboarding: () => void;
}

export const AuthContext = createContext<AuthState>({
    isLoggedIn: false,
    isOnboarded: false,
    logIn: () => { },
    logOut: () => { },
    handleOnboarding: () => { },
})

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const { getItem, setItem } = useStorage()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isOnboarded, setIsOnboarded] = useState(false)

    const logIn = async () => {
        console.log("logIn 1")
        await setItem(IS_LOGGED_IN, true)
        setIsLoggedIn(true)
        router.replace('/(tabs)/(DashboardNavigator)/dashboard')
    }

    const logOut = async () => {
        await setItem(IS_LOGGED_IN, false)
        setIsLoggedIn(false)
    }

    const checkOnboarding = async () => {
        const isUserLoggedIn = await getItem(IS_LOGGED_IN)
        const isUserOnboarded = await getItem(ONBOARDING_COMPLETE)
        setIsLoggedIn(isUserLoggedIn == true ? true : false)
        setIsOnboarded(isUserOnboarded == true ? true : false)
    }

    const handleOnboarding = async () => {
        console.log("handleOnboarding 1")
        await setItem(ONBOARDING_COMPLETE, true)
        setIsOnboarded(true)
        console.log("handleOnboarding 2")
        router.replace('/(PublicStack)/login')
    }

    useEffect(() => {
        checkOnboarding()
    }, [])

    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            isOnboarded,
            logIn,
            logOut,
            handleOnboarding
        }}>
            {children}
        </AuthContext.Provider>
    )
}