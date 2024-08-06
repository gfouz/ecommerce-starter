import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';

export const LoginSchema = z.object({
  fullname: z.string().min(6, 'Username requires more than 6 values'),
  password: z.string().min(6, 'Password must be at least 6 values'),
});

//RegisterSchema inherits from LoginSchema
export const RegisterSchema = z
  .object({
    fullname: z.string().min(4, 'Your Full Name is required'),
    email: z
      .string()
      .min(6, 'Your Email is required')
      .email('oh! invalid format!'),
    address: z.string().min(6, 'Your Address is required'),
    password: z.string().min(6, 'Password must be at least 6'),
    confirmPassword: z.string().min(6, 'Confirm Password must be at least 6'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type Register = z.infer<typeof RegisterSchema>;
export type Login = z.infer<typeof LoginSchema>;

export interface PasswordInputRegisterProps {
  errors: FieldErrors<Register>;
  register: UseFormRegister<Register>;
}
export interface PasswordInputLoginProps {
  errors: FieldErrors<Login>;
  register: UseFormRegister<Login>;
}

export type Auth = Register | Login;
