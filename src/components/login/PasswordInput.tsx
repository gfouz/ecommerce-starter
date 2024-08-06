import React from 'react';
import { Input } from '@nextui-org/input';
import EyeButton from '../buttons/EyeButton';
import { PasswordInputLoginProps } from '../../schemas/auth.schema.ts';
import { useUserStore } from '../../store/userstore.ts';

const PasswordInput = (props: PasswordInputLoginProps) => {
  const { errors, register } = props;
  const [type, setType] = React.useState('password');
  const user = useUserStore((state) => state.user);
  return (
    <Input
      type={type}
      color='warning'
      label='Password'
      variant='underlined'
      className='customed-input'
      labelPlacement='outside'
      {...register('password')}
      placeholder='Enter your Password'
      defaultValue={user.password ? user.password : undefined }
      classNames={{ label: 'dark:!text-white !text-white' }}
      isInvalid={errors?.password?.message ? true : false}
      errorMessage={`${errors?.password?.message}`}
      endContent={<EyeButton color='warning' type={type} setType={setType} />}
    />
  );
};

export default PasswordInput;
