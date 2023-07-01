import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import { 
  NavigationContainer, 
} from '@react-navigation/native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Container from './src/navigation/container';


type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000000' : '#FFFFFF',
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Container />
      </NavigationContainer>
  </SafeAreaProvider>
  );
}

export default App;
