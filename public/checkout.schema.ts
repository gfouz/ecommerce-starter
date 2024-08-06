import { z } from 'zod';
import { InputGeneric } from '../components/checkout/types.ts';

import { DateTime as dt } from 'luxon';

const dateSchema = z.object({
  calendar: z.object({
    identifier: z.string(),
  }),
  era: z.string(),
  year: z.number().min(0),
  month: z.number().min(1).max(12),
  day: z.number().min(1).max(31),
}).refine((data) => new Date( `${data.year}-${data.month}-${data.day}` ) < new Date('2030-01-01'), {
      message: 'Expiration date must be before January 1, 2030',
    })
  


export const checkoutSchema = z.object({
    
  expirationDate: dateSchema,

 cvv: z.string().min(3, 'CVV must be 3 digits').max(3, 'CVV must be 3 digits'),
});

export type CheckoutProps = z.infer<typeof checkoutSchema>;
export type InputProps = InputGeneric<CheckoutProps>;

/*
  .refine((data) => new Date( data.expirationDate )  > new Date(), {
      message: 'Expiration date must be in the future',
    })
    .refine((data) => new Date( data.expirationDate ) < new Date('2030-01-01'), {
      message: 'Expiration date must be before January 1, 2030',
    }),


     .refine((data) => new Date( `${data.expirationDate.year}-${data.expirationDate.month}-${data.expirationDate.day}` ) < new Date('2030-01-01'), {
      message: 'Expiration date must be before January 1, 2030',
    })
    
*/
