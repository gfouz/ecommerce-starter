//@ts-nocheck
// this component is only an example to remember.
import { Input as NextUIInput } from '@nextui-org/input';
import { Auth } from '../../schemas/auth.schema.ts';

const Input = (props: Auth) => {
  const { errors, type = 'text', color, label, register, placeholder } = props;
  const tag = label.toLowerCase().charAt(0).toUpperCase() + label.slice(1);

  return (
    <NextUIInput
      type={type}
      label={tag}
      color={color}
      variant='underlined'
      labelPlacement='outside'
      placeholder={placeholder}
      {...register(label)}
      classNames={{ label: '!text-white', input: '*!text-white' }}
      isInvalid={errors[label]?.message ? true : false}
      errorMessage={`${errors[label]?.message}`}
    />
  );
};
export default Input;
