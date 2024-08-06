//@ts-nocheck
import { useCartStore } from '../store/store.ts';
import Layout from '../components/layout/Layout.tsx';

const OrderReview = () => {
  const cart = useCartStore((state) => state.cart);
  const total = cart.reduce(
    (acc, product) => acc + product?.quantity * product?.price,
    0,
  );
  const quantity =
    cart.length > 0
      ? cart.reduce((acc, product) => acc + product?.quantity, 0)
      : 0;
  const shipping = cart.length > 10 || cart.length == 0 ? 0.0 : 5.75;
  const order = {
    items: [
      { id: 1, name: 'Product 1', quantity: 2, price: 29.99 },
      { id: 2, name: 'Product 2', quantity: 1, price: 49.99 },
    ],
    subtotal: 109.97,
    shipping: 10.0,
    total: 119.97,
  };

  return (
    <Layout>
      <section className='w-full h-full py-12 bg-gray-900 '>
        <div className='mx-auto md:max-w-[600px]  bg-stone-300 p-12 shadow-md rounded-lg'>
          <h2 className='text-2xl text-gray-700 font-extrabold tracking-tight mb-4'>
            { `Order review - ${new Date().toDateString()}`}
          </h2>
           
          {cart.length > 0 ? (
            <ul className='divide-y divide-gray-200 mb-4'>
              {cart?.map((item, index) => (
                <div key={index} className='bg-gray-50 my-4 p-4 rounded'>
                  <li key={item?.id} className=' flex justify-between py-2'>
                    <div>
                      <h3 className='text-lg text-gray-700 font-extrabold'>
                        Product: {item?.title}
                      </h3>
                      <h3 className='text-lg'>
                        Price per product: {item?.price}
                      </h3>
                      <h3 className='text-lg'>Category: {item?.category}</h3>
                      <p className='text-red-500 tracking-wide'>
                        Quantity: {item?.quantity}
                      </p>
                    </div>
                    <p className='text-lg font-semibold'>
                      Price per Quantity: $
                      {(item?.price * item?.quantity).toFixed(2)}
                    </p>
                  </li>
                </div>
              ))}
            </ul>
          ) : (
            <h2 className='text-rose-500 text-3xl font-black'>
              You have not bought anything yet!
            </h2>
          )}

          <div className='text-right'>
            <p className='text-gray-600'>
              Subtotal: ${order.subtotal.toFixed(2)}
            </p>
            <p className='text-gray-600'>Shipping: ${shipping.toFixed(2)}</p>
            <p className='text-xl font-bold'>Total: ${total.toFixed(2)}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OrderReview;
