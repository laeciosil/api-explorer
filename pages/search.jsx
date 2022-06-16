import Header from '../components/Header';
import Footer from '../components/Footer';
import CardsContainer from '../components/CardsContainer';
import { Widget } from '../components/FeedbackWidget/Widget';

function Search() {
  return (
    <div className='flex flex-col w-screen h-screen bg-light-background dark:bg-dark-background overflow-x-hidden scrollbar-thumb-zinc-400 dark:scrollbar-thumb-gray-600  scrollbar-track-transparent scrollbar-thin'>
      <Header />
      <main className='w-full grow flex items-start justify-around relative bg-light-background dark:bg-dark-background '>
        <CardsContainer />
      </main>
      <Widget />
      <Footer />
    </div>

  );
}

export default Search;