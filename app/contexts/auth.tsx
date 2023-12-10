/**
 * @file auth.tsx
 * @author Higor Grigorio <higorgrigorio@gmail.com>
 * @date 2023-11-30
 *
 * @changelog
 *  - 2023-11-30 - Higor Grigorio
 *    - Create auth.tsx.
 */
import React, {createContext, useState} from "react";
import auth from '../services/auth';
import {Spinner, YStack} from "tamagui";

export type AuthContextData = {
    signed: boolean;
    token: string;
    user: object | null;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): Promise<void>;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log('AuthProvider', user)

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 0);
    });

    async function signIn() {
        // TODO: Implementar login
        return auth.signIn('Joe', '123').then(setUser);
    }

    async function signOut() {
        // return auth.signOut();
    }

    if (loading) {
        return <YStack ai={'center'} jc={'center'} flex={1}>
            <Spinner size={'large'}/>
        </YStack>
    }

    return <AuthContext.Provider value={{
        signed: !!user,
        token: '',
        user: null,
        signIn,
        signOut,
        loading,
    }}>{children}</AuthContext.Provider>
}
