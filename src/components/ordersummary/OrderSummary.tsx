// src/OrderSummary.js

const OrderSummary = () => {
  const orderDetails = {
    fullName: 'Juan Pérez',
    email: 'juan.perez@example.com',
    address: 'Av. Siempreviva 742, Springfield',
    items: [
      { id: 1, name: 'Producto A', price: 30.0, quantity: 1 },
      { id: 2, name: 'Producto B', price: 25.0, quantity: 1 },
    ],
    shippingCost: 5.0, // Costo de envío fijo
    taxRate: 0.0825, // Impuesto del 8.25% en Texas
  };

  // Calcular subtotal
  const subtotal = orderDetails.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  // Cálculo del impuesto y Total
  const tax = subtotal * orderDetails.taxRate;
  const total = subtotal + tax + orderDetails.shippingCost;

  return (
    <div className='max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-6'>Resumen del Pedido</h2>

      <div className='mb-4'>
        <h3 className='font-semibold'>Información del Cliente</h3>
        <p>{orderDetails.fullName}</p>
        <p>{orderDetails.email}</p>
        <p>{orderDetails.address}</p>
      </div>

      <div className='mb-4'>
        <h3 className='font-semibold'>Artículos</h3>
        <ul className='space-y-4'>
          {orderDetails.items.map((item) => (
            <li key={item.id} className='flex justify-between'>
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex justify-between border-t border-gray-300 mt-4 pt-4'>
        <div className='flex flex-col'>
          <span>Subtotal</span>
          <span>Impuesto (8.25%)</span>
          <span>Envío</span>
        </div>
        <div className='flex flex-col text-right'>
          <span>${subtotal.toFixed(2)}</span>
          <span>${tax.toFixed(2)}</span>
          <span>${orderDetails.shippingCost.toFixed(2)}</span>
        </div>
      </div>

      <div className='flex justify-between font-bold mt-4'>
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
