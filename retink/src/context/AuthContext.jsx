import { createContext, useState } from "react";

export const authContext = createContext();


const AuthContextProvider = ({children}) => {

   

    const [userData, setUserData] = useState({});
    const [login, setLogin] = useState(false);

    console.log(userData)
    const handleLogin = () => {
        setLogin(!login)
    }
  

    return (
        <authContext.Provider value={{userData, setUserData, handleLogin, login}}>
            {
                children
            }
        </authContext.Provider>
    )
}

export default AuthContextProvider;