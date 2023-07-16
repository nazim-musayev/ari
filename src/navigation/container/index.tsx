import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/sign-in';

const Stack = createNativeStackNavigator();

const Container = () => {
  const user = false;

  return (
    <Stack.Navigator>
      {!user && (
        <Stack.Screen
          name='SignInScreen'
          component={SignInScreen}
        />
      )}
    </Stack.Navigator>
  );
}

export default Container;
