import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <article>
      <section className='relative w-full h-full'>
        <img className='min-w-full h-auto' src='images/404.jpg' alt='404' />
        <section className='absolute top-0 left-0 w-full h-full flex items-center p-8'>
          <Link to='/'>
            <h2 className='px-4 border border-gray-100 rounded-xl text-white text-[3vw]'>
              Back to home
            </h2>
          </Link>
        </section>
      </section>
      <section className='w-full p-40'>
        <Link to='/'>
          <h2 className='w-[fit-content] px-4 border border-gray-800 rounded-xl text-black text-[3vw]'>
            Back to products
          </h2>
        </Link>
      </section>
    </article>
  );
}
