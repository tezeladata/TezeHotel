import {createContext, useState} from "react";

export const AdminContext = createContext(null);

const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AdminContext.Provider value={{admin, setAdmin, isLoggedIn, setIsLoggedIn}}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminProvider;