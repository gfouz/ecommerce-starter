import { Button } from '@nextui-org/button';
import { Minus } from '../icons/PlusAndMinus.tsx';
import { subtractFromCart } from '../../store/useDispatch.ts';
import { IActionsButton } from './types.ts';

export default function MinusButton({ product, dispatch }: IActionsButton) {
  return (
    <Button
      className='text-tiny text-white bg-slate-800 w-[40%]'
      variant='flat'
      color='default'
      radius='lg'
      size='sm'
      onClick={() => {
        subtractFromCart(dispatch, product);
      }}
    >
      <Minus color='#ffffff' />
    </Button>
  );
}
