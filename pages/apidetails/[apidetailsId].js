import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import EvaluationSection from "../../components/EvaluationSection";
import NewProjectModal from "../../components/NewProjectModal";

function ApiDetails() {
  return (
    <div className='flex flex-col w-screen h-screen bg-light-background dark:bg-dark-background overflow-x-hidden'>
      <Header />
    <main className='w-full grow flex items-start justify-center relative bg-light-background dark:bg-dark-background'>
      <section className='container w-[calc(100vw-2rem)] md:w-[56rem] my-9 space-y-5 flex flex-col justify-center items-center'>
        <section>
          <h2 className="border-b-[1px] font-bold text-xl">Nome da APi</h2>
          <div className="flex justify-between items-center">
            <p className="w-full md:w-2/3 pt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className='divide-y space-y-3'>
              <div className='pt-4'>
                <div className='space-y-1'>
                  <h3 className="text-[#979899] font-normal text-sm">Repositorio</h3>
                  <p>github.com/thiagodanobrega</p>
                </div>  
              </div>
              <div className='pt-4'>
                <div className='space-y-1'>
                  <h3 className="text-[#979899] font-normal text-sm">Categoria</h3>
                  <p>Animes</p>
                </div>  
              </div>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col justify-center items-center space-y-5">
          <div className="w-full flex items-center justify-between border-b-[1px]">
            <h2 className="font-bold text-xl">Projetos que usaram a api</h2>
            <NewProjectModal />
          </div>
          <div className='w-[calc(100%-3rem)]'>
            <Carousel />
          </div>
        </section>
        <EvaluationSection />
      </section>
    </main>
      <Footer />
  </div>
  );
}

export default ApiDetails;