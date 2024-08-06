import { z } from 'zod';
import { InputGeneric } from '../components/checkout/types.ts';

const dateSchema = z
  .object({
    calendar: z.object({
      identifier: z.string(),
    }),
    era: z.string(),
    year: z.number().min(0),
    month: z.number().min(1).max(12),
    day: z.number().min(1).max(31),
  })
  .refine(
    (data) =>
      new Date(`${data.year}-${data.month}-${data.day}`) <
      new Date('2030-01-01'),
    {
      message: 'Expiration date must be before January 1, 2030',
    },
  )
  .refine(
    (data) => new Date(`${data.year}-${data.month}-${data.day}`) > new Date(),
    {
      message: 'Expiration date must after today',
    },
  );

export const checkoutSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .min(6, 'Email is required')
    .email('invalid format!'),
  address: z.string().min(5, 'Address is required'),
  cardNumber: z
    .string()
    .min(16, 'Card number must be 16 digits')
    .max(16, 'Card number must be 16 digits'),
  expirationDate: dateSchema,

  cvv: z.string().min(3, 'CVV must be 3 digits').max(3, 'CVV must be 3 digits'),
});

export type CheckoutProps = z.infer<typeof checkoutSchema>;
export type InputProps = InputGeneric<CheckoutProps>;
