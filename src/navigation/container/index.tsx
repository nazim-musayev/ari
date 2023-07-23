import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/sign-in';
import OnboardingScreen from '../screens/onboarding';
import { type AuthStackParamList } from '../../types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const Container = () => {
  const user = false;

  return (
    <Stack.Navigator
      initialRouteName='OnboardingScreen'
      screenOptions={{
        contentStyle: {
          paddingHorizontal: 16,
          backgroundColor: 'white',
        },
        headerShown: false,
      }}
    >
      {!user && (
        <>
          <Stack.Screen
            name='OnboardingScreen'
            component={OnboardingScreen}
          />
          <Stack.Screen
            name='SignInScreen'
            component={SignInScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default Container;
