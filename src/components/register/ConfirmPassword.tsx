//@ts-nochec

import React from 'react';
import { Input } from '@nextui-org/input';
import EyeButton from '../buttons/EyeButton';
import { PasswordInputRegisterProps } from '../../schemas/auth.schema.ts';

const ConfirmPasswordInput = (props: PasswordInputRegisterProps) => {
  const { errors, register } = props;
  const [type, setType] = React.useState('password');

  return (
    <Input
      label='Confirm Password'
      type={type}
      color='warning'
      variant='underlined'
      labelPlacement='outside'
      placeholder='Repeat your Password'
      {...register('confirmPassword')}
      classNames={{ label: '!text-white', input: 'text-white' }}
      isInvalid={errors?.confirmPassword?.message ? true : false}
      errorMessage={`${errors?.confirmPassword?.message}`}
      endContent={<EyeButton color='warning' type={type} setType={setType} />}
    />
  );
};

export default ConfirmPasswordInput;
