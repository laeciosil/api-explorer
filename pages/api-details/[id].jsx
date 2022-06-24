import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { LinkSimple } from 'phosphor-react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import EvaluationSection from '../../components/EvaluationSection';
import NewProjectModal from '../../components/NewProjectModal';
import { Widget } from '../../components/FeedbackWidget/Widget';
import CarouselProject from '../../components/CarouselProject';
import { useData } from '../../hooks/useData';

function ApiDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { getApiById, apiById } = useData();

  useEffect(() => {
    async function getApiDetails() {
      if (id) {
        getApiById(id);
      }
    }
    getApiDetails();
  }, [id]);

  return (
    apiById && (
      <div className="flex flex-col w-screen h-screen bg-light-background dark:bg-dark-background overflow-x-hidden scrollbar-thumb-zinc-400 dark:scrollbar-thumb-gray-600  scrollbar-track-transparent scrollbar-thin">
        <Header />
        <main className="w-full grow flex items-start justify-center relative bg-light-background dark:bg-dark-background">
          <section className="container w-[calc(100vw-2rem)] md:w-[56rem] my-9 space-y-8 flex flex-col justify-center items-center mb-16">
            <section className="w-full">
              <h2 className="border-b-[1px] pb-1 dark:border-gray-700 font-bold text-xl text-light-text dark:text-dark-text">
                {apiById.name}
              </h2>
              <div className="flex md:flex-row flex-col justify-between items-center">
                <p className="w-full md:w-2/3 pt-4 text-light-text dark:text-dark-text">{apiById.description}</p>
                <div className="w-full md:w-auto divide-y dark:divide-gray-700 space-y-3">
                  <div className="pt-4">
                    <div className="space-y-1">
                      <h3 className="text-[#979899] font-bold text-sm">
                        Repositório
                      </h3>
                      <a
                        target="_blank"
                        href={apiById.url_repo}
                        className="cursor-pointer flex items-center gap-1 font-medium text-light-text dark:text-dark-text"
                        rel="noreferrer"
                      >
                        <LinkSimple weight="bold" />
                        {apiById.url_repo.length > 30
                          ? `${apiById.url_repo.slice(0, 30)}...`
                          : apiById.url_repo}
                      </a>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="space-y-1">
                      <h3 className="text-[#979899] font-bold text-sm">
                        Categoria
                      </h3>
                      <p className="font-medium text-light-text dark:text-dark-text">{apiById.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="w-full flex flex-col justify-center items-center space-y-5">
              <div className="w-full flex items-center justify-between border-b-[1px] pb-1 dark:border-gray-700">
                <h2 className="font-bold text-xl text-light-text dark:text-dark-text">Portfólio</h2>
                <NewProjectModal apiDetails={apiById} />
              </div>

              <CarouselProject />

            </section>
            <EvaluationSection
              apiId={apiById.id}
            />
          </section>
        </main>
        <Widget />
        <Footer />
      </div>
    )
  );
}

export default ApiDetails;
