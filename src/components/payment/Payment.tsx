import { Link } from 'react-router-dom';

export default function PaymentMethods() {
  return (
    <article className='relative'>
      <img className='blur-sm' src='images/payment.jpg' alt='payment methods' />
      <section className='w-full h-full p-10 absolute top-0 left-0 flex justify-evenly items-end'>
        <img className='w-[10vw]' src='images/cards/visa.svg' alt='visa' />
        <img
          className='w-[10vw]'
          src='images/cards/mastercard.svg'
          alt='master'
        />
        <img className='w-[10vw]' src='images/cards/hiper.svg' alt='hiper' />
        <img className='w-[10vw]' src='images/cards/jcb.svg' alt='jcb' />
        <img className='w-[10vw]' src='images/cards/paypal.svg' alt='paypal' />
      </section>
      <article className='w-full h-full p-10 absolute top-0 left-0 flex justify-center items-center'>
        <Link to='/privacy/policy'>
          <h2 className='text-white text-[4vw] font-extrabold tracking-tight'>
            Supported Payment Methods
          </h2>
        </Link>
      </article>
    </article>
  );
}
