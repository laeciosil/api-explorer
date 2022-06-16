import { createContext, useContext, useState } from 'react';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
import { api } from '../services';

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [apis, setApis] = useState([]);
  const [token, setToken] = useState('');
  const router = useRouter();

  const validateToken = async () => {
    const { exp } = jwt.decode(token);

    if (exp && exp < Date.now() / 1000) {
      router.push(process.env.NEXT_PUBLIC_REDIRECT_URL);
    }
  };

  const getApis = async () => {
    await validateToken(token);

    const response = await api.get('/apis/by-user', {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    return setApis(response.data);
  };

  const getJWTToken = async (accessToken) => {
    if (!user) {
      const response = await api.get(
        `/users/login/get-user-data?access_token=${accessToken}`,
      );

      const secret = process.env.NEXT_PUBLIC_JWT_SECRET;
      localStorage.setItem('apiExplorer:user', JSON.stringify(response.data));
      const { user: userData } = jwt.verify(response.data.jwt_token, secret);
      setUser(userData);
      setToken(response.data.jwt_token);
      if (response.data.jwt_token) {
        getApis(response.data.jwt_token);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        getJWTToken,
        getApis,
        user,
        apis,
        token,
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
