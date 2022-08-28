import { createContext, useContext, useState } from "react";



const AuthContext = createContext();

export const AuthProvider = ( {children} ) => {
  const [currentUser, setCurrentUser] = useState('');


  const value = {

  }

  return  (
    <AuthContext.Provider value={value} >
      {children}
    </AuthContext.Provider>
  )
}


export const useAuth = () => {
  return useContext(AuthContext)
}