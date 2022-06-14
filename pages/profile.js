import Header from '../components/Header';
import Footer from '../components/Footer';
import { Avatar } from 'flowbite-react';
import { PencilSimple, X } from "phosphor-react";
import NewApiModal from '../components/NewApiModal';
import { Widget } from '../components/FeedbackWidget/Widget';

const api = [
  {
    name: 'Nome da api',
    categoria: 'anime',
    date: '11/06/2022'
  },
  {
    name: 'Nome da api do projeto',
    categoria: 'anime',
    date: '11/06/2022'
  }
]

export default function Home() {
  return (
    <div className='flex flex-col w-screen h-screen bg-light-background dark:bg-dark-background overflow-x-hidden scrollbar-thumb-zinc-400 dark:scrollbar-thumb-gray-600  scrollbar-track-transparent scrollbar-thin'>
      <Header />
    <main className='w-full grow flex items-start justify-center relative bg-light-background dark:bg-dark-background'>
      <section className='container w-[calc(100vw-2rem)] md:w-[56rem] my-9 space-y-7 flex flex-col justify-center items-start'>
        <section>
          <Avatar rounded={true} stacked={true} size='lg'>
            <div className="space-y-2 font-medium dark:text-white">
              <h2 className='text-3xl'>
                Thiago Nóbrega
              </h2>
              {/* <button
                type="button"
                onClick={() => {}}
                className="rounded-md cursor-pointer text-red-600 hover:text-dark-text transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-light-primary dark:focus-visible:ring-offset-dark-primary focus-visible:ring-light-secondary focus-visible:ring-opacity-50"
              >
                Sair
              </button> */}
            </div>
          </Avatar>
        </section>

        <section className="w-full flex flex-col justify-center items-center space-y-5">
          <div className="w-full flex items-center justify-between border-b-[1px] dark:border-gray-700">
            <h2 className="font-bold text-xl pb-1">Suas {`api's`}:</h2>
            <NewApiModal />
          </div>
          {api.map((item, index) => (
            <div key={index} className="w-full grid grid-cols-3 md:grid-cols-4 gap-4 items-center  bg-light-primary dark:bg-dark-primary p-5 rounded-md shadow-md ring-1 ring-black ring-opacity-5">
              <h3>{item.name}</h3>
              <p className='text-center md:col-span-2'>{item.date}</p>
              <div className='flex items-center gap-3 justify-end'>
                <button 
                  type='button' 
                  className="rounded-md p-2 text-gray-400 hover:text-light-text hover:bg-gray-200 dark:hover:text-dark-text dark:hover:bg-gray-600 transition-all"
                >
                  <PencilSimple weight='bold'/>
                </button>
              </div>
            </div>
          ))}
        </section>
      </section>
    </main>
      <Widget />
      <Footer />
  </div>
  )
}
