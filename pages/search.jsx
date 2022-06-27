import Header from '../components/Header';
import Footer from '../components/Footer';
import CardsContainer from '../components/CardsContainer';
import { Widget } from '../components/FeedbackWidget/Widget';

function Search() {
  return (
    <div className="flex flex-col w-screen h-screen bg-light-background dark:bg-dark-background overflow-x-hidden sm:scrollbar-thumb-zinc-400 sm:dark:scrollbar-thumb-gray-600 sm:scrollbar-track-transparent sm:scrollbar-thin">
      <Header title="Pesquisar | ApiExplorer" description="Melhores api's públicas para seu projeto." />
      <main className="w-full grow flex items-start justify-around relative bg-light-background dark:bg-dark-background ">
        <CardsContainer />
      </main>
      <Widget />
      <Footer />
    </div>

  );
}

export default Search;
