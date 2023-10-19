import axios from "../api/axios";
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({})

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        console.log('useEffect');
        if (!user) {
            axios.get('/profile').then(({ data }) => {
                console.log(data)
                setUser(data)
            })
        }
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

