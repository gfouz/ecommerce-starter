import { Button } from '@nextui-org/button';
import { Plus } from '../icons/PlusAndMinus.tsx';
import { addToCart } from '../../store/useDispatch.ts';
import { Product, Action } from '../../store/store.ts';

interface IPlusButton {
  quantity: number;
  product: Product;
  dispatch: (action: Action) => void;
}

export default function PlusButton({
  quantity,
  product,
  dispatch,
}: IPlusButton) {
  return (
    <>
      {quantity > 0 ? (
        <Button
          className='text-tiny text-white bg-slate-800 w-[40%]'
          variant='flat'
          color='default'
          radius='lg'
          size='sm'
          onClick={() => {
            addToCart(dispatch, product);
          }}
        >
          <>
            <Plus color='#ffffff' />
            {quantity ? <span className='font-medium'>{quantity}</span> : null}
          </>
        </Button>
      ) : (
        <Button
          className='text-tiny text-white bg-slate-800 w-full'
          variant='flat'
          color='default'
          radius='lg'
          size='sm'
          onClick={() => {
            addToCart(dispatch, product);
          }}
        >
          <span className='font-bold'>Add</span>
        </Button>
      )}
    </>
  );
}
