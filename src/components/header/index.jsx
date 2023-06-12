import { Link } from 'react-router-dom';
import Logo from '~/assets/img/logo.svg';
import { CiMenuFries } from 'react-icons/ci';

export default function Header() {
  return (
    <header className='mt-8'>
      <div className='flex justify-between items-center align-middle'>
        <Link to='/' className='m-0 p-0 h-auto'>
          <img
            src={Logo}
            alt='Sato Fisch'
            className='h-4 object-cover md:h-8 opacity-80'
          />
        </Link>
        <Link to='/' className='mr-6 md:mr-0'>
          <CiMenuFries size={24} />
        </Link>
      </div>
      <h1 className='text-center font-thin mt-6 md:mt-8 text-xl md:text-5xl'>
        FRISCHFISCH
      </h1>
    </header>
  );
}
