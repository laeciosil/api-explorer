import { useContext } from 'react';
import { useRouter } from 'next/router';
import { useSession, signIn } from 'next-auth/react';
import { setCookie, parseCookies } from 'nookies';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import { Widget } from '../components/FeedbackWidget/Widget';
import { AppContext } from '../context/AppContext';

export default function Home() {
  const { setIsOpenApiModal } = useContext(AppContext);
  const { data: session } = useSession();
  const router = useRouter();
  const { isCreatingApi, isCreatingEvaluation, id } = parseCookies();

  function redirectProfile() {
    if (session) {
      setIsOpenApiModal(true);
      router.push('/profile');
    } else {
      setCookie(null, 'isCreatingApi', 'true', { maxAge: 60 * 60, path: '/' });
      signIn();
    }
  }

  function redirectEvaluation() {
    router.push(`/apidetails/${id}`);
  }

  if (session && isCreatingApi) redirectProfile();
  if (session && isCreatingEvaluation) redirectEvaluation();

  return (
    <div className="flex flex-col w-screen h-screen bg-light-background dark:bg-dark-background overflow-x-hidden scrollbar-thumb-zinc-400 dark:scrollbar-thumb-gray-600  scrollbar-track-transparent scrollbar-thin">
      <Header />
      <main className="w-full grow flex items-center justify-center relative h-screen bg-light-background dark:bg-dark-background">
        <section className="w-[calc(100vw-2rem)] md:w-[48rem] space-y-10 flex flex-col justify-center items-center">
          <h1 className="text-center text-6xl font-bold">
            Encontre a
            {' '}
            <span className="text-light-secondary">API</span>
            {' '}
            perfeita para o seu próximo
            {' '}
            <span className="text-light-secondary">projeto</span>
          </h1>
          <h2 className="text-[#979899] text-center text-[22px] font-normal">
            <button
              type="button"
              className="text-light-secondary hover:text-[#737eff] cursor-pointer underline"
              onClick={redirectProfile}
            >
              Adicione uma api
            </button>
            {' '}
            e compartilhe com a comunidade.
          </h2>
          <div className="w-[calc(100%-3rem)] space-y-5">
            <span className="text-xl font-bold">Recomendações</span>
            <Carousel />
          </div>
        </section>
      </main>
      <Widget />
      <Footer />
    </div>
  );
}
