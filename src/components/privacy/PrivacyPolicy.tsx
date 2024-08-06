import { privacy_policy, security_mesures } from './constants.ts';

export default function PrivacyPolicy() {
  return (
    <section className='w-full py-20 flex bg-stone-900 justify-center items-center'>
      <article className='p-4 rounded-xl text-stone-200 bg-stone-700'>
        <h2 className='capitalize'>privacy policy</h2>
        <div
          className='max-w-[700px]'
          dangerouslySetInnerHTML={{ __html: privacy_policy }}
        />

        <div
          className='max-w-[700px]'
          dangerouslySetInnerHTML={{ __html: security_mesures }}
        />
      </article>
    </section>
  );
}
