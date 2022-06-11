import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import { Avatar } from 'flowbite-react';
import NewApiModal from '../components/NewApiModal';

export default function Home() {
  return (
    <div className='flex flex-col w-screen h-screen bg-light-background dark:bg-dark-background overflow-x-hidden'>
      <Header />
    <main className='w-full grow flex items-start justify-center relative bg-light-background dark:bg-dark-background'>
      <section className='container w-[calc(100vw-2rem)] md:w-[56rem] my-9 space-y-5 flex flex-col justify-center items-center'>
        <section>
          <Avatar rounded={true} stacked={true} size='xl'>
            <div className="space-y-3 font-medium dark:text-white">
              <h2 className='text-4xl'>
                Thiago Nóbrega
              </h2>
              <button
                type="button"
                onClick={() => {}}
                className="rounded-md cursor-pointer py-2 px-7 border-2 border-light-secondary text-sm text-light-secondary hover:bg-light-secondary hover:text-dark-text transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-light-primary dark:focus-visible:ring-offset-dark-primary focus-visible:ring-light-secondary focus-visible:ring-opacity-50"
              >
                Logout
              </button>
            </div>
          </Avatar>
        </section>

        <section className="w-full flex flex-col justify-center items-center space-y-5">
          <div className="w-full flex items-center justify-between border-b-[1px]">
            <h2 className="font-bold text-xl">Suas {`api's`}:</h2>
            <NewApiModal />
          </div>
          
        </section>
      </section>
    </main>
      <Footer />
  </div>
  )
}
