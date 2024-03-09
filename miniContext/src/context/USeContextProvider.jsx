import React from "react";
import UseContext from "./UseContext";

const UserContextProvider = ({ children }) => {

    const [user, setuser] = React.useState(null);
    return (
        <UseContext.Provider value={{ user, setuser }}>
            {children}

        </UseContext.Provider>
    )
}

export default UserContextProvider;