import { Link } from 'react-router-dom';
import { categories } from './constants.ts'


export default function Category() {
  return (
    <article className='p-4 py-10'>
      <h2 className='text-3xl mb-6'>Shop by category</h2>
      <section className='responsive-columns'>
        {categories.map((item, index) => (
          <Link
            key={index}
            to='/products'
            state={{ category: item.category }}
          >
            <div className='relative cursor-pointer'>
              <section className='absolute p-4 top-0 left-0 w-full h-full flex p-4 justify-center'>
                <h2 className='font-bold tracking-tight text-emerald-200 text-[140%]'>
                  {item.name}
                </h2>
              </section>
              <img className='rounded-xl' src={item.image} alt={item.name} />
            </div>
          </Link>
        ))}
      </section>
    </article>
  );
}
