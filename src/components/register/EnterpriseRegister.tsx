import React from 'react';
import { Spacer } from '@nextui-org/spacer';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, Register } from '../../schemas/auth.schema.ts';

import SubmitButton from '../../components/buttons/SubmitButton.tsx';
import LoginButton from '../../components/buttons/LoginButton.tsx';

import { Input } from '@nextui-org/input';
import PasswordInput from './PasswordInput.tsx';
import ConfirmPassword from './ConfirmPassword.tsx';
import { useUserStore } from '../../store/userstore.ts';

export interface FormInput {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function MaterialDesignSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Register>({
    resolver: zodResolver(RegisterSchema),
  });

  const dispatch = useUserStore((state) => state.dispatch);
  const user = useUserStore((state) => state.user);
  const [registered, setRegistered] = React.useState(false);
  React.useEffect(() => {
    user.registered === true ? setRegistered(true) : setRegistered(false);
  }, [user]);

  const onSubmit: SubmitHandler<Register> = (_user) => {
    dispatch({
      type: 'SET_USER',
      payload: { ..._user, logged: false, registered: true },
    });
  };
  return (
    <div className='dark py-20 flex flex-col items-center justify-center brown-bg'>
      <div className='bg-transparent p-8 py-16 rounded-3xl shadow shadow-amber-100 shadow-lg w-full max-w-md'>
        <h2 className='text-amber-200 text-3xl font-extrabold tracking-tight mb-6 text-center'>
          Sign Up
        </h2>
        <form className='mt-6' onSubmit={handleSubmit(onSubmit)}>
          <div className='my-18'>
            <Input
              color='warning'
              label='Full Name'
              variant='underlined'
              labelPlacement='outside'
              placeholder='Write your Full Name'
              {...register('fullname')}
              classNames={{ label: '!text-white', input: 'text-white' }}
              isInvalid={errors?.fullname?.message ? true : false}
              errorMessage={`${errors.fullname?.message}`}
            />
            <Spacer y={8} />
            <Input
              type='email'
              color='warning'
              label='Your Email'
              variant='underlined'
              labelPlacement='outside'
              placeholder='Write your Email'
              {...register('email')}
              classNames={{ label: '!text-white', input: 'text-white' }}
              isInvalid={errors?.email?.message ? true : false}
              errorMessage={`${errors.email?.message}`}
            />
            <Spacer y={8} />
            <Input
              color='warning'
              label='Address'
              variant='underlined'
              labelPlacement='outside'
              placeholder='Write your Address'
              {...register('address')}
              classNames={{ label: '!text-white', input: 'text-white' }}
              isInvalid={errors?.address?.message ? true : false}
              errorMessage={`${errors.address?.message}`}
            />
            <Spacer y={8} />
            <PasswordInput errors={errors} register={register} />
            <Spacer y={8} />
            <ConfirmPassword register={register} errors={errors} />
            <Spacer y={8} />
            {registered === true ? <LoginButton /> : <SubmitButton />}
          </div>
          {registered === true ? (
            <p className='text-white text-xs tracking-tight font-extrabold my-4'>
              you are already Signed Up
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
}

/*
 {mutation.failureReason ? (
  <p className='text-rose-500 tracking-tight font-extrabold text-xs mt-1'>{`${mutation.failureReason}`}</p>
  ) : null
  }
  
*/
