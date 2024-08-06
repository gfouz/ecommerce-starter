import React from 'react';
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, Login } from '../../schemas/auth.schema.ts';
import CancelButton from '../../components/buttons/CancelButton.tsx';
import { useUserStore } from '../../store/userstore.ts';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import PasswordInput from './PasswordInput.tsx';
import LogoutButton from '../../components/buttons/LogoutButton.tsx';

const EnterpriseLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(LoginSchema),
  });
  const [logged, setLogged] = React.useState(false);
  const [message, setMessage] = React.useState<string | null>(null);
  const user = useUserStore((state) => state.user);
  const dispatch = useUserStore((state) => state.dispatch);
  //const { mutation } = useAuthMutation(loginService);

  React.useEffect(() => {
    user.logged === true ? setLogged(true) : setLogged(false);
  }, [user]);

  const onSubmit: SubmitHandler<Login> = async (data) => {
    if (data.password === user.password && data.fullname === user.fullname) {
      const _user = { ...user, logged: true };
      dispatch({ type: 'SET_USER', payload: _user });
    }
    if (data.fullname !== user.fullname) {
      setMessage('Full Name do not match');
    }
    if (data.password !== user.password) {
      setMessage('Password do not match');
    }
  };
  const navigate = useNavigate();
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-800'>
      <div className='dark bg-slate-900 p-8 rounded-3xl shadow-lg w-full max-w-md '>
        <h2 className='text-slate-500 text-3xl font-extrabold tracking-tight mb-6 text-center'>
          Sign In
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='my-24'>
            <div className='w-full mb-5'>
              <Input
                color='warning'
                label='Full Name'
                variant='underlined'
                labelPlacement='outside'
                placeholder='Write your Full Name'
                {...register('fullname')}
                defaultValue={user.fullname ? user.fullname : undefined}
                classNames={{ label: '!text-white', input: 'text-white' }}
                isInvalid={errors?.fullname?.message ? true : false}
                errorMessage={`${errors.fullname?.message}`}
              />
            </div>
          </div>
          <div className='my-16'>
            <div className='w-full mb-5'>
              <PasswordInput errors={errors} register={register} />
            </div>
          </div>

          {logged === true ? (
            <LogoutButton />
          ) : (
            <div className='flex justify-evenly p-4 my-8'>
              {
               user.password === undefined 
               ?
                <Button 
                  className='px-10' 
                  color='primary'
                  onClick={()=>{ navigate('/register')}}
                >
                  Go to Register
                </Button>
               : 
                <Button color='primary' type='submit' className='px-10'>
                  Send
                </Button>
              }
              <CancelButton />
            </div>
          )}
        </form>
        {message !== null ? (
          <p className='text-rose-500 text-xs tracking-tight font-extrabold my-4'>
            {logged === false ? message : null}
          </p>
        ) : null}
        {logged === true ? (
          <p className='text-white text-xs tracking-tight font-extrabold my-4'>
            Ok ready!
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default EnterpriseLogin;
