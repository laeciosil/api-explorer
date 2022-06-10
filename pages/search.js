import Header from '../components/Header';
import Footer from '../components/Footer';
import CardsContainer from '../components/CardsContainer';

function Search() {
  return (
    <div className='flex flex-col w-screen h-screen bg-light-background dark:bg-dark-background overflow-x-hidden'>
      <Header />
      <main className='w-full grow flex items-start justify-around relative bg-light-background dark:bg-dark-background'>
        <CardsContainer />
      </main>
      <Footer />
    </div>

  );
}

export default Search;