// UserContext.js
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [access, setAccess] = useState('');
  const [refresh, setRefresh] = useState('');
  const [csrf, setCsrf] = useState('');
  const [profile, setProfile] = useState({});

  return (
    <UserContext.Provider
      value={{
        access,
        setAccess,
        refresh,
        setRefresh,
        csrf,
        setCsrf,
        profile,
        setProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUser };
