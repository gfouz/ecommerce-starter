import { features } from './features-data.ts';
import Modal from '../modal/Modal.tsx';

export default function Features({
  styles = 'responsive-columns',
}: {
  styles?: string;
}) {
  return (
    <div className='py-16 px-4'>
      <div className={styles}>
        {features.map((feature, index) => (
          <div
            key={index}
            className='bg-rose-50 rounded-xl px-3 py-6 flex justify-center items-center gap-5'
          >
            <img
              src={feature.image}
              alt={feature.name}
              className='w-12 h-12 object-contain'
            />
            <div>
              <h4 className='font-medium capitalize text-lg'>{feature.name}</h4>
              <p className='text-gray-500 text-sm mb-8'>
                {feature.description}
              </p>
              <Modal title={feature.title} info={feature.info} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
