import { View } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '../../../ui/common/button';
import { SignInFormData } from '../../../types';
import TextInput from '../../../ui/common/text-input';
import { signInSchema } from '../../../lib/validations/auth';


const SignInPage = (): JSX.Element => {

  const { control, handleSubmit, formState: { errors } } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema)
  });
  
  const hasErrors = Object.keys(errors)?.length > 0;

  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    if (data.email == 'test@gmail.com') {
      console.log('success');
    };
  };

  return (
    <View className='flex-1 justify-center'>
      <TextInput
        name='email'
        control={control}
        placeholder='Email'
      />
      <TextInput
        name='password'
        control={control}
        placeholder='Şifrə'
        autoCapitalize='none'
        secureTextEntry={true}
      />
      <Button onPressIn={handleSubmit(onSubmit)} disabled={hasErrors}>
        Daxil ol
      </Button>
    </View>
  );
}

export default SignInPage;
