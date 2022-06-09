import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <div className='w-screen h-screen bg-light-background dark:bg-dark-background overflow-x-hidden'>
      <Header />
      <main className='w-full flex items-center justify-center relative h-screen bg-light-background dark:bg-dark-background'>
        <section className='w-[calc(100vw-2rem)] md:w-[48rem] space-y-10 flex flex-col justify-center items-center'>
          <h1 className='text-center text-6xl font-bold'>Encontre a <span className='text-light-secondary'>API</span> perfeita para o seu próximo <span className='text-light-secondary'>projeto</span></h1>
          <h2 className='text-[#979899] text-center text-xl font-normal'>Compartilhe, busque e utilize {`api's`} em um só lugar.</h2>
          <div className='w-[calc(100%-3rem)] space-y-5'>
            <span className='text-xl font-bold'>Recomendações</span>
            <Carousel />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
