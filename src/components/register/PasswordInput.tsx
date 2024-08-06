import React from 'react';
import { Input } from '@nextui-org/input';
import EyeButton from '../buttons/EyeButton';
import { PasswordInputRegisterProps } from '../../schemas/auth.schema.ts';

const PasswordInput = (props: PasswordInputRegisterProps) => {
  const { errors, register } = props;
  const [type, setType] = React.useState('password');

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
      classNames={{ label: 'dark:!text-white !text-white' }}
      isInvalid={errors?.password?.message ? true : false}
      errorMessage={`${errors?.password?.message}`}
      endContent={<EyeButton color='warning' type={type} setType={setType} />}
    />
  );
};

export default PasswordInput;
