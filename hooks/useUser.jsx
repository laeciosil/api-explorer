import { createContext, useContext, useState } from 'react';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
import { api } from '../services';

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState({});
  const [token, setToken] = useState('');
  const router = useRouter();

  const validateToken = async (jwtToken) => {
    const { exp } = jwt.decode(jwtToken);

    if (exp && exp < Date.now() / 1000) {
      router.push(process.env.NEXT_PUBLIC_REDIRECT_URL);
    }
  };

  const getProjects = async (jwtToken) => {
    await validateToken(jwtToken);

    const response = await api.get('/users/projects', {
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
    });
    return setProjects(response.data);
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
        getProjects(response.data.jwt_token);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        getJWTToken,
        getProjects,
        user,
        projects,
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
