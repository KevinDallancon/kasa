import Banniere from '../components/Banner/Banner';
import Gallery from '../components/Gallery/Gallery';

function Home() { 
  return (
    <main className='flex'>
      <Banniere />
      <Gallery />
    </main>
  );
}

export default Home;