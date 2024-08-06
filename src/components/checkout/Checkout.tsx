import { Button } from '@nextui-org/button';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutSchema } from '../../schemas/checkout.schema.ts';
import { DatePicker } from '@nextui-org/date-picker';
import { Input } from '@nextui-org/input';
import { useUserStore } from '../../store/userstore.ts';

const CheckoutForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const user = useUserStore((state) => state.user);
  return (
    <div className='flex items-center py-20 justify-center bg-[#1e1136]'>
      <div className='dark bg-white p-8  rounded-3xl shadow-lg w-full max-w-md '>
        <h2 className='text-primary text-3xl font-extrabold tracking-tight mb-10 text-center'>
          Checkout
        </h2>
        <form className='' onSubmit={handleSubmit(onSubmit)}>
          <div className='my-8'>
            <div className='w-full mb-5'>
              <Input
                type='email'
                color='secondary'
                label='Your Email'
                variant='underlined'
                labelPlacement='outside'
                {...register('email')}
                placeholder='Enter your Email'
                classNames={{ label: '!text-gray-800' }}
                defaultValue={user.email ? user.email : undefined}
                isInvalid={errors.email?.message ? true : false}
                errorMessage={`${errors.email?.message}`}
              />
            </div>
          </div>
          <div className='my-8'>
            <div className='w-full mb-5'>
              <Input
                color='secondary'
                label='Your Address'
                variant='underlined'
                labelPlacement='outside'
                {...register('address')}
                placeholder='Enter your Address'
                classNames={{ label: '!text-gray-800' }}
                defaultValue={user.address ? user.address : undefined}
                isInvalid={errors.address?.message ? true : false}
                errorMessage={`${errors.address?.message}`}
              />
            </div>
          </div>

          <div className='border border-gray-700 p-2 py-4 rounded rounded-xl'>
            <div className=''>
              <div className='w-full'>
                <Input
                  color='secondary'
                  label='Card Number'
                  variant='underlined'
                  {...register('cardNumber')}
                  placeholder='Enter sixteen numbers'
                  classNames={{ label: '!text-gray-800' }}
                  isInvalid={errors.cardNumber?.message ? true : false}
                  errorMessage={`${errors.cardNumber?.message}`}
                />
              </div>
            </div>
            <div className=''>
              <div className='w-full'>
                <Controller
                  name='expirationDate'
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      color='secondary'
                      label='Expiration date'
                      variant='underlined'
                      dateInputClassNames={{
                        input: 'datepicker-input',
                        label: '!text-gray-800',
                      }}
                      isInvalid={errors.expirationDate?.message ? true : false}
                      errorMessage={`${errors.expirationDate?.message}`}
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div className='my-8'>
            <div className='w-full mb-5'>
              <Input
                color='secondary'
                label='Cvv'
                variant='underlined'
                {...register('cvv')}
                placeholder='Enter your Username'
                classNames={{ label: '!text-gray-800' }}
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
