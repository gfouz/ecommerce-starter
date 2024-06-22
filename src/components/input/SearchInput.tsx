import { Input } from '@nextui-org/input';
import Search from '../../components/icons/Search.tsx';

export default function () {
  return (
    <Input
      classNames={{
        base: 'max-w-full sm:max-w-[10rem] h-10',
        mainWrapper: 'h-full',
        input: 'text-small',
        inputWrapper:
          'h-full font-normal text-default-500  dark:bg-default-500/20',
      }}
      color='success'
      variant='bordered'
      placeholder='Type to search...'
      size='md'
      startContent={<Search size={18} />}
      type='search'
    />
  );
}
