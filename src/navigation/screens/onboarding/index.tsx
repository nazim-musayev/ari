import { View } from 'react-native';
import Button from '../../../ui/common/button';
import { type StackScreenNavigationProp } from '../../../types';


const OnboardingScreen = ({navigation}: StackScreenNavigationProp<'OnboardingScreen'>) => {

  const handlePress = () => {
    navigation.navigate('SignInScreen');
  };

  return (
    <View className='flex-1 justify-center items-center'>
      <Button onPressIn={handlePress}>
        Giriş səhifəsinə keç
      </Button>
    </View>
  );
}

export default OnboardingScreen;
