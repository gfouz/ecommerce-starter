import { Button } from '@nextui-org/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutSchema } from '../../schemas/checkout.schema.ts';
import { DatePicker } from '@nextui-org/date-picker';
import { Input } from '@nextui-org/input';

const CheckoutForm = () => {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(  {
    resolver: zodResolver(checkoutSchema),
  }  );
  const onSubmit = (data: any) => {
   
    console.log( data);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#1e1136]'>
      <div className='dark bg-violet-950 p-8 my-10 rounded-3xl shadow-lg w-full max-w-md '>
        <h2 className='text-violet-300 text-3xl font-extrabold tracking-tight mb-6 text-center'>
          Checkout
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <div className='my-16'>
            <div className='w-full mb-5'>
              
            
                  <DatePicker
                    label='Expiration date'
                    onChange={(date) => setValue('expirationDate', date)} 
                    isInvalid={errors.expirationDate?.message ? true : false}
                    errorMessage={`${errors.expirationDate?.message}`}
                  />
               


            </div>
          </div>
          <div className='my-16'>
            <div className='w-full mb-5'>
              <Input
                color='secondary'
                label='Cvv'
                {...register('cvv')}
                placeholder='Enter your Username'
                classNames={{ label: 'dark:!text-white' }}
                isInvalid={errors.cvv?.message ? true : false}
                errorMessage={`${errors.cvv?.message}`}
              />
            </div>
          </div>
          <div className=''>
            <Button color='primary' type='submit' className='px-10'>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;

/*
              <Controller
                name="expirationDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    label='Expiration date'
                    {...field}
                    isInvalid={errors.expirationDate?.message ? true : false}
                    errorMessage={`${errors.expirationDate?.message}`}
                  />
                )}
              />

              
  
*/
