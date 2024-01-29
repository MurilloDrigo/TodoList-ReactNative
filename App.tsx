import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import { Routes } from '@/routes';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

