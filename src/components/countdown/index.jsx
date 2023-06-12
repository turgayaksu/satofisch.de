import Countdown from 'react-countdown';

const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <div className='text-3xl md:text-7xl mt-8 md:mt-0 font-medium flex justify-between sf-shadow'>
        <div className='mx-2 flex flex-col w-12 md:w-28 justify-center text-center relative after:content-[" "] after:absolute after:w-2 after:h-2 after:rounded-full after:bg-white/20 after:top-1/3 after:-right-3'>
          <span className='relative w-full block'>{days} </span>
          <span className='text-xs md:text-sm block opacity-50'>Tage</span>
        </div>
        <div className='mx-2 flex flex-col w-12 md:w-28 justify-center text-center relative after:content-[" "] after:absolute after:w-2 after:h-2 after:rounded-full after:bg-white/20 after:top-1/3 after:-right-3 '>
          <span className='relative w-full block'>{hours} </span>
          <span className='text-xs md:text-sm block opacity-50'>Stunden</span>
        </div>
        <div className='mx-2 flex flex-col w-12 md:w-28 justify-center text-center relative after:content-[" "] after:absolute after:w-2 after:h-2 after:rounded-full after:bg-white/20 after:top-1/3 after:-right-3'>
          <span className='relative w-full block'>{minutes} </span>
          <span className='text-xs md:text-sm block opacity-50'>Minuten</span>
        </div>
        <div className='mx-2 flex flex-col w-12 md:w-28 justify-center text-center relative'>
          <span className='relative w-full block'>{seconds} </span>
          <span className='text-xs md:text-sm block opacity-50'>Sekunden</span>
        </div>
      </div>
    </>
  );
};

export default function Timer() {
  return <Countdown date={'2023-08-15T00:00:00'} renderer={renderer} />;
}
