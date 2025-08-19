import AWWWWWWWWWWWWWW from '../assets/AWWWWWWWWWWWWWW.svg';
import DIABLO_NO_SUGAR from '../assets/DIABLO_NO_SUGAR.svg';
import EXPOSION from '../assets/EXPOSION.svg';
import GUITAR from '../assets/GUITAR.svg';
import HELL from '../assets/HELL.svg';
import JESUS from '../assets/JESUS.svg';
import LABA_DE_URS from '../assets/LABA_DE_URS.svg';
import TREX from '../assets/TREX.svg';

export default function YesPage() {
  return (
    <main className='relative min-h-screen bg-white text-gray-900 overflow-hidden'>
      {/* Title */}
      <h1 className='absolute top-4 left-1/2 -translate-x-1/2 text-6xl md:text-7xl font-extrabold tracking-tight z-30'>
        DA!!
      </h1>

      {/* Background explosion */}
      <img
        src={EXPOSION}
        alt='Explosion background'
        className='pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] md:w-[1600px] max-w-none z-10'
      />

      {/* Left can (HELL) */}
      <img
        src={HELL}
        alt='Energy can'
        className='pointer-events-none absolute -top-5 left-20 md:left-10 w-44 md:w-[45rem] rotate-[-3deg] z-0'
      />

      {/* Top-left badge (AWW...) */}
      <img
        src={AWWWWWWWWWWWWWW}
        alt='Badge'
        className='pointer-events-none absolute bottom-0 left-20 w-48 md:w-[35rem] z-30'
      />

      {/* Guitar near center-left */}
      <img
        src={GUITAR}
        alt='Guitar'
        className='pointer-events-none absolute top-[25%] left-[22%] w-36 md:w-[20rem] z-20'
      />

      {/* Right chocolate bar (DIABLO) */}
      <img
        src={DIABLO_NO_SUGAR}
        alt='Diablo chocolate bar'
        className='pointer-events-none absolute -right-10 w-[28rem] md:w-[28rem] rotate-[1deg] drop-shadow z-0'
      />

      {/* TREX on right bottom */}
      <img
        src={TREX}
        alt='T-Rex'
        className='pointer-events-none absolute bottom-0 right-0 w-[28rem] md:w-[50rem] z-20'
      />

      {/* Bear paw bottom center */}
      <img
        src={LABA_DE_URS}
        alt='Bear paw'
        className='pointer-events-none absolute -bottom-2 left-[58%] -translate-x-1/2 w-40 md:w-[16rem] z-40'
      />

      <img
        src={JESUS}
        alt='Jesus'
        className='pointer-events-none absolute bottom-0 left-[60%] w-16 md:w-[10rem] z-30'
      />
    </main>
  );
}
