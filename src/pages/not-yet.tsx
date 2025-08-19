import CAT_1 from '../assets/CAT_1.svg';
import CAT_2 from '../assets/CAT_2.svg';

export default function NotYetPage() {
  return (
    <main className='relative min-h-screen bg-white text-gray-900'>
      <h1 className='absolute inset-0 flex items-center justify-center text-5xl md:text-6xl font-extrabold tracking-tight'>
        NU INCA :(
      </h1>

      <img
        src={CAT_2}
        alt='Cat top-left'
        className='absolute top-0 left-0 w-48 md:w-72 rotate-180'
      />
      <img
        src={CAT_1}
        alt='Cat top-right'
        className='absolute top-0 right-0 w-48 md:w-72 rotate-180'
      />
      <img
        src={CAT_1}
        alt='Cat bottom-left'
        className='absolute bottom-0 left-0 w-48 md:w-72'
      />
      <img
        src={CAT_2}
        alt='Cat bottom-right'
        className='absolute bottom-0 right-0 w-48 md:w-72'
      />
    </main>
  );
}
