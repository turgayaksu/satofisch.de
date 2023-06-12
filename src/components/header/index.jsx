import { Link } from 'react-router-dom';
import Logo from '~/assets/img/logo.svg';
import { CiMenuFries } from 'react-icons/ci';

export default function Header() {
  return (
    <header className='my-10 flex justify-between'>
      <Link to='/'>
        <img src={Logo} alt='Sato Fisch' className=' h-8 opacity-80' />
      </Link>
      <Link to='/'>
        <CiMenuFries size={30} />
      </Link>
    </header>
  );
}
