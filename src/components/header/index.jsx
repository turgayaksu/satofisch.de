import { Link } from 'react-router-dom';
import Logo from '~/assets/img/logo.svg';
import { CiMenuFries } from 'react-icons/ci';

export default function Header() {
  return (
    <header className='mt-5 md:mt-10'>
      <div className='flex justify-between'>
        <Link to='/'>
          <img
            src={Logo}
            alt='Sato Fisch'
            className='h-4 w-full object-cover md:h-8 opacity-80'
          />
        </Link>
        <Link to='/'>
          <CiMenuFries size={24} />
        </Link>
      </div>
      <h1 className='text-center font-thin mt-6 md:mt-8 text-xl md:text-5xl'>
        FRISCHFISCH
      </h1>
    </header>
  );
}
