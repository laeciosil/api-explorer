import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaGithub } from 'react-icons/fa';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Widget } from '../../components/FeedbackWidget/Widget';
import { useData } from '../../hooks/useData';
import { useUser } from '../../hooks/useUser';
import EditPhotoModal from '../../components/EditPhotoModal ';

function FrontDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { getFrontById, frontById } = useData();
  const { user } = useUser();
  useEffect(() => {
    async function getFrontDetails() {
      if (id) {
        getFrontById(id);
      }
    }
    getFrontDetails();
  }, [id]);
  return (
    frontById && (
      <div className="flex flex-col w-screen h-screen bg-light-background dark:bg-dark-background overflow-x-hidden scrollbar-thumb-zinc-400 dark:scrollbar-thumb-gray-600  scrollbar-track-transparent scrollbar-thin">
        <Header />
        <main className="w-full grow flex items-start justify-center relative bg-light-background dark:bg-dark-background">
          <section className="container w-[calc(100vw-2rem)] md:w-[56rem] my-9 space-y-8 flex flex-col justify-center items-center mb-16">
            <section>
              <h2 className="border-b-[1px] pb-1 dark:border-gray-700 font-bold text-xl">
                {frontById.name}
              </h2>
              <div className="flex">
                <div className="">
                  <div className="pt-4">
                    <div className="">
                      <h3 className="text-[#979899] font-bold text-sm">
                        Repositório
                      </h3>
                      <a
                        target="_blank"
                        href={frontById.url_repo}
                        className="cursor-pointer"
                        rel="noreferrer"
                      >
                        <span>
                          Link
                          <FaGithub />
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="space-y-1">
                      <h3 className="text-[#979899] font-bold text-sm">
                        Categoria
                      </h3>
                      <p>{frontById.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              {
               user && frontById.user_id === user.id && <EditPhotoModal front={frontById} />
              }
            </section>
            <img src={frontById.url_img} alt={frontById.name} />
          </section>
        </main>
        <Widget />
        <Footer />
      </div>
    )
  );
}

export default FrontDetails;
