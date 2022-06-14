import { createContext, useContext, useState } from "react";
import jwt from "jsonwebtoken";
import { api } from "../services";
import { useRouter } from "next/router";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [apis, setApis] = useState([]);
  const router = useRouter();

  const validateToken = async (token) => {

    const { exp } = jwt.decode(token);

    if (exp && exp < Date.now() / 1000) {
      router.push(process.env.NEXT_PUBLIC_REDIRECT_URL);
    }
  };

  const getApis = async (token) => {
    await validateToken(token);

    const response = await api.get("/apis/by-user", {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    return setApis(response.data);
  };

  const getJWTToken = async (access_token) => {
    if (!user) {
      const response = await api.get(
        `/users/login/get-user-data?access_token=${access_token}`
      );

      const secret = process.env.NEXT_PUBLIC_JWT_SECRET;
      localStorage.setItem("apiExplorer:user", JSON.stringify(response.data));
      const { user } = jwt.verify(response.data.jwt_token, secret);
      setUser(user);
      if (response.data.jwt_token) {
        getApis(response.data.jwt_token);
      }
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
