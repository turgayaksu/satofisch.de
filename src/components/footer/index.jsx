import {
  RiFacebookBoxFill,
  RiTwitterFill,
  RiInstagramFill,
  RiYoutubeFill,
  RiLinkedinBoxFill
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div className='mb-5'>
      <div className='text-center mb-10 opacity-70 text-sm md:text-base '>
        <span className='mr-2'>Gastronomie-Lieferung</span>
        <span className='ml-2'>
          <Link to='tel:+4901795210503'>Tel: 0179-521 05 03</Link>
        </span>
      </div>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='flex justify-around'>
          <Link to='#' className='mr-3'>
            <RiFacebookBoxFill size={24} />
          </Link>
          <Link to='#' className='mr-3'>
            <RiTwitterFill size={24} />
          </Link>
          <Link to='#' className='mr-3'>
            <RiInstagramFill size={24} />
          </Link>
          <Link to='#' className='mr-3'>
            <RiYoutubeFill size={24} />
          </Link>
          <Link to='#' className='mr-3'>
            <RiLinkedinBoxFill size={24} />
          </Link>
        </div>
        <div className='text-xs md:text-sm mt-3 md:mt-0 text-center text-white/70 hover:text-white'>
          © 2023 SatoFish, Alle Rechte vorbehalten
        </div>
      </div>
    </div>
  );
}
