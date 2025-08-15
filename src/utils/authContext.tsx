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
        await setItem(IS_LOGGED_IN, true)
        setIsLoggedIn(true)
    }

    const logOut = async () => {
        await setItem(IS_LOGGED_IN, false)
        setIsLoggedIn(false)
    }

    const checkOnboarding = async () => {
        const onboardingDone = await getItem(ONBOARDING_COMPLETE)
        if (onboardingDone) setIsOnboarded(true)
        else setIsOnboarded(false)
    }

    const handleOnboarding = async () => {
        await setItem(ONBOARDING_COMPLETE, true)
        setIsOnboarded(true)
        console.log("handleOnboarding")
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