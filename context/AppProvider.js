import PropTypes from "prop-types"
import React, { useState, useEffect } from "react";
import { AppContext } from "./AppContext";
import jwt from 'jsonwebtoken';

function AppProvider({children}) {
  const [] = useState();
  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
    async function fecthCategories() {
      const response = await fetch('https://apibr.herokuapp.com/categories');
      const result = await response.json();
      return setCategories(result.categories);
    }
    fecthCategories();
  }, []);
  const state = {
    categories,
  };
  
  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppProvider;