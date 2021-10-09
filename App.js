import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/route'
import Realm from "realm";

export default function App() {

  return (
    <NavigationContainer>
      <RootNavigation />  
    </NavigationContainer>
  );
}