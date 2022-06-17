import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import EvaluationSection from '../../components/EvaluationSection';
import NewProjectModal from '../../components/NewProjectModal';
import { Widget } from '../../components/FeedbackWidget/Widget';
import CarouselProject from '../../components/CarouselProject';
import { api } from '../../services';

function ApiDetails() {
  const [apiDetails, setApiDetails] = useState({});
  const [evaluations, setEvaluations] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function getApiDetails() {
      if (id) {
        const response = await api.get(`apis/${id}`);
        setApiDetails(response.data);
        setEvaluations(response.data.evaluations);
      }
    }
    getApiDetails();
  }, [id]);
  return (
    <div className="flex flex-col w-screen h-screen bg-light-background dark:bg-dark-background overflow-x-hidden scrollbar-thumb-zinc-400 dark:scrollbar-thumb-gray-600  scrollbar-track-transparent scrollbar-thin">
      <Header />
      <main className="w-full grow flex items-start justify-center relative bg-light-background dark:bg-dark-background">
        <section className="container w-[calc(100vw-2rem)] md:w-[56rem] my-9 space-y-8 flex flex-col justify-center items-center mb-16">
          <section>
            <h2 className="border-b-[1px] pb-1 dark:border-gray-700 font-bold text-xl">
              {apiDetails.name}
            </h2>
            <div className="flex justify-between items-center">
              <p className="w-full md:w-2/3 pt-4">{apiDetails.description}</p>
              <div className="divide-y dark:divide-gray-700 space-y-3">
                <div className="pt-4">
                  <div className="space-y-1">
                    <h3 className="text-[#979899] font-bold text-sm">
                      Repositório
                    </h3>
                    <a
                      target="_blank"
                      href={apiDetails.url_repo}
                      className="cursor-pointer"
                      rel="noreferrer"
                    >
                      {apiDetails.url_repo}
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="space-y-1">
                    <h3 className="text-[#979899] font-bold text-sm">
                      Categoria
                    </h3>
                    <p>{apiDetails.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full flex flex-col justify-center items-center space-y-5">
            <div className="w-full flex items-center justify-between border-b-[1px] pb-1 dark:border-gray-700">
              <h2 className="font-bold text-xl">Projetos que usam a api</h2>
              <NewProjectModal apiDetails={apiDetails} />
            </div>
            <div className="w-[calc(100%-3rem)]">
              <CarouselProject />
            </div>
          </section>
          <EvaluationSection
            evaluations={evaluations}
            apiId={apiDetails.id}
            setEvaluations={setEvaluations}
          />
        </section>
      </main>
      <Widget />
      <Footer />
    </div>
  );
}

export default ApiDetails;
