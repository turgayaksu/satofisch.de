import { Link } from 'react-router-dom';
import Logo from '~/assets/img/logo.svg';
import { CiMenuFries } from 'react-icons/ci';

export default function Header() {
  return (
    <header className='mt-5 md:mt-10 flex justify-between'>
      <Link to='/'>
        <img
          src={Logo}
          alt='Sato Fisch'
          className='h-5 w-full object-cover md:h-8 opacity-80'
        />
      </Link>
      <Link to='/'>
        <CiMenuFries size={24} />
      </Link>
    </header>
  );
}
