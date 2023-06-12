import BgAnimation from '~/components/bg-animation';
import Footer from '~/components/footer';
import Header from '~/components/header';
import MainContainer from '~/components/main';

export default function Maintenance() {
  return (
    <div className='container mx-auto max-w-6xl h-screen'>
      <div className='flex flex-col justify-between h-full '>
        <Header />
        <MainContainer />
        <Footer />
      </div>
      <BgAnimation />
    </div>
  );
}
