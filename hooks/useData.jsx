import {
  createContext, useContext, useState, useEffect,
} from 'react';
import { api } from '../services';

export const DataContext = createContext({});

export function DataProvider({ children }) {
  const [apis, setApis] = useState([]);
  const [editApi, setEditApi] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filterAPi, setFilterAPi] = useState({});

  async function getApis() {
    setIsLoading(true);
    const response = await api.get('/apis');
    setIsLoading(false);
    setApis(response.data);
  }

  async function getCategories() {
    const response = await api.get('/categories');

    setCategories(response.data.categories);
  }
  useEffect(() => {
    getCategories();
    getApis();
  }, []);

  return (
    <DataContext.Provider
      value={{
        apis,
        editApi,
        setEditApi,
        isLoading,
        setIsLoading,
        categories,
        filterAPi,
        setFilterAPi,
        getApis,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  return context;
}
