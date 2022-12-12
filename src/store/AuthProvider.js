import AuthContext from './authContext';

import { useState } from 'react';

const AuthProvider = (props) => {
  const [username, setUsername] = useState('');
  const [id, setID] = useState('');
  const [token, setToken] = useState('');
  const [Role, setRole] = useState('');

  const authContext = {
    username: username,
    id: id,
    token: token,
    Role: Role,
    login: (id, username, token,Role) => {
      setID(id);
      setUsername(username);
      setToken(token);
      setRole(Role);
    },
    logout: () => {
      setUsername('');
      setID('');
      setToken('');
      setRole('');
    }
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
