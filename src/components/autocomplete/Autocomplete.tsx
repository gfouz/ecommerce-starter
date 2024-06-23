import {
  Autocomplete as NextUIAutocomplete,
  AutocompleteItem,
} from '@nextui-org/autocomplete';

const animals = [
  {
    value: 1,
    label: 'perro',
  },
  {
    value: 2,
    label: 'gato',
  },
  {
    value: 3,
    label: 'cotorra',
  },
];

export default function Autocomplete() {
  return (
    <div className='flex w-full flex-wrap md:flex-nowrap gap-4'>
      <NextUIAutocomplete label='Select an animal' className='max-w-xs'>
        {animals.map((animal) => (
          <AutocompleteItem key={animal.value} value={animal.value}>
            {animal.label}
          </AutocompleteItem>
        ))}
      </NextUIAutocomplete>
      <NextUIAutocomplete
        label='Favorite Animal'
        placeholder='Search an animal'
        className='max-w-xs'
        defaultItems={animals}
      >
        {(item) => (
          <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
        )}
      </NextUIAutocomplete>
    </div>
  );
}
