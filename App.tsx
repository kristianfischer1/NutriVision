import React from 'react';
import Login from "./src/Login";
import { useEffect, useState } from 'react';
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import "./firebaseConfig"
import { UserContextProvider } from './src/back-end/providers/UserProvider';
import TabNavigator from './src/back-end/navigation/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';

type UserState = User | null;

export default function App() {
  const [user, setUser] = useState<UserState>(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuthChecked(true);
    });
  
    return () => {
      unsubscribe();
    };
  }, []);
  
  if (!authChecked) return null;
  if (user === null) return <Login setUser={setUser} />

  return (
    <NavigationContainer>
      <UserContextProvider user={user}>
        <TabNavigator/>
      </UserContextProvider>
    </NavigationContainer>
  );
}

