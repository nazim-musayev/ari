import { z } from 'zod';

export const signInSchema = z.object({
  email: z
    .string({ required_error: 'Emaili daxil edin'})
    .email('Email düzgün formatda deyil'),
  password: z
    .string({ required_error: 'Şifrəni daxil edin'})
    .min(8, 'Şifrə ən azı 8 simvoldan ibarət olmalıdır')
});
