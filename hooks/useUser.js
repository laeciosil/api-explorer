import { createContext, useContext, useState } from 'react';
import jwt from 'jsonwebtoken';

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [userData, setUser] = useState([]);
  

  const dataUser = (token) => {

    const secret = process.env.NEXT_PUBLIC_JWT_SECRET;
  
    const { user } = jwt.verify(token, secret);
    
    setUser(user);
  }

  
  return (
    <UserContext.Provider
      value={ {
        dataUser,
        userData,
      } }
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  return context;
}

