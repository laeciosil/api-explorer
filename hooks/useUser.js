import { createContext, useContext, useState } from "react";
import jwt from "jsonwebtoken";
import { api } from "../services";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [apis, setApis] = useState([]);

  const getApis = async (token) => {
    const response = await api.get('/apis/by-user', { headers: {
      Authorization: `bearer ${token}`,
    }});
   
    setApis(response.data);
  }

  const getJWTToken = async (access_token) => {
    
    if (!user) {
      const response = await api.get(
        `/users/login/get-user-data?access_token=${access_token}`
      );

      const secret = process.env.NEXT_PUBLIC_JWT_SECRET;
      localStorage.setItem("apiExplorer:user", JSON.stringify(response.data));
      const { user } = jwt.verify(response.data.jwt_token, secret);
      setUser(user);
      getApis(response.data.jwt_token);
    }
  };

  

  return (
    <UserContext.Provider
      value={{
        getJWTToken,
        user,
        apis,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  return context;
}
