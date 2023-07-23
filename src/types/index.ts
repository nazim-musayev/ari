import * as z from 'zod'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { signInSchema } from '../lib/validations/auth';
import { AuthStackParams } from '../lib/validations/navigation';

export type SignInFormData = z.infer<typeof signInSchema>;

export type AuthStackParamList = z.infer<typeof AuthStackParams>;

export type StackScreenNavigationProp<T extends keyof AuthStackParamList> = NativeStackScreenProps<AuthStackParamList, T>;
