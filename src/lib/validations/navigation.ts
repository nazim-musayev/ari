import { z } from 'zod';

export const AuthStackParams = z.object({
  OnboardingScreen: z.undefined(),
  SignInScreen: z.undefined(),
});
