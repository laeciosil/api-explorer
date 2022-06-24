import { useRouter } from 'next/router';
import { useSession, signIn } from 'next-auth/react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import { Widget } from '../components/FeedbackWidget/Widget';
import { useData } from '../hooks/useData';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  const { getApis } = useData();
  const {
    refresh, isCreatingApi, isCreatingEvaluation, id,
  } = parseCookies();

  useEffect(() => {
    if (refresh) {
      destroyCookie(null, 'refresh');
      getApis();
    }
  }, []);

  function redirectProfile() {
    if (session) {
      setCookie(null, 'isCreatingApi', 'true', { maxAge: 60 * 60, path: '/' });
      router.push('/profile');
    } else {
      setCookie(null, 'isCreatingApi', 'true', { maxAge: 60 * 60, path: '/' });
      signIn('github');
    }
  }

  function redirectEvaluation() {
    router.push(`/api-details/${id}`);
  }

  if (session && isCreatingApi) redirectProfile();
  if (session && isCreatingEvaluation) redirectEvaluation();

  return (
    <div className="flex flex-col w-screen h-screen bg-light-background dark:bg-dark-background overflow-x-hidden scrollbar-thumb-zinc-400 dark:scrollbar-thumb-gray-600  scrollbar-track-transparent scrollbar-thin">
      <Header />
      <main className="w-full grow flex items-center justify-center relative h-screen bg-light-background dark:bg-dark-background">
        <section className="py-6 w-[calc(100vw-2rem)] md:w-[48rem] space-y-10 flex flex-col justify-center items-center">
          <h1 className="text-center md:text-6xl text-4xl font-bold text-light-text dark:text-dark-text">
            Encontre a
            {' '}
            <span className="text-light-secondary">API</span>
            {' '}
            perfeita para o seu próximo
            {' '}
            <span className="text-light-secondary">projeto</span>
          </h1>
          <h2 className="text-[#979899] text-center md:text-xl text-lg font-normal">
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
          <div className="md:w-full md:pl-0 w-screen pl-4 space-y-5">
            <span className="text-lg font-bold text-light-text dark:text-dark-text">Recomendações</span>
            <Carousel />
          </div>
        </section>
      </main>
      <Widget />
      <Footer />
    </div>
  );
}
