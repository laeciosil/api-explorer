import { Avatar } from 'flowbite-react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewApiModal from '../components/NewApiModal';
import { Widget } from '../components/FeedbackWidget/Widget';
import { useUser } from '../hooks/useUser';
import EditApiModal from '../components/EditApiModal';
import DeleteApiModal from '../components/DeleteApiModal';
import EditPhotoModal from '../components/EditPhotoModal ';
import DeleteFrontModal from '../components/DeleteFrontModal';

export default function Home() {
  const {
    user, projects, getProjects, token,
  } = useUser();
  const { data: session } = useSession();
  const { apis, fronts } = projects;
  const router = useRouter();
  useEffect(
    () => {
      if (!session) {
        router.push('/');
      }
      getProjects(token);
    },
    [],
  );

  const logout = async () => {
    await router.push('/');
    signOut();
  };

  return (
    <div className="flex flex-col w-screen h-screen bg-light-background dark:bg-dark-background overflow-x-hidden">
      <Header />
      {session && (
        <main className="w-full grow flex items-start justify-center relative bg-light-background dark:bg-dark-background">
          <section className="container w-[calc(100vw-2rem)] md:w-[45rem] my-9 space-y-5 flex flex-col justify-center items-center">
            <section className="flex md:flex-row flex-col items-center justify-center gap-2">
              <Avatar
                img={user && user.profile}
                rounded
                stacked
                size="xl"
              />
              <div className="space-y-3 font-medium dark:text-white flex flex-col items-center justify-center md:justify-start">
                <h2 className="md:text-4xl text-2xl">{user && user.name}</h2>
                <button
                  type="button"
                  onClick={logout}
                  className="rounded-md cursor-pointer py-2 px-7 border-2 border-light-secondary text-sm text-light-secondary hover:bg-light-secondary hover:text-dark-text transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-light-primary dark:focus-visible:ring-offset-dark-primary focus-visible:ring-light-secondary focus-visible:ring-opacity-50"
                >
                  Logout
                </button>
              </div>
            </section>

            <section className="w-full flex flex-col justify-center items-center space-y-5">
              <div className="w-full flex items-center justify-between border-b-[1px] dark:border-gray-700">
                <h2 className="font-bold text-xl text-light-text dark:text-dark-text">
                  Suas
                  {' '}
                  {'api\'s'}
                  :
                </h2>
                <NewApiModal />
              </div>

              {
              apis.length ? apis.map((api) => (
                <div
                  key={api.id}
                  className="w-full grid grid-cols-3 md:grid-cols-4 gap-4 items-center bg-light-primary dark:bg-dark-primary p-4 rounded-md shadow-md ring-1 ring-black ring-opacity-5"
                >
                  <h3 className="sm:col-span-1 col-span-2 font-medium text-light-text dark:text-dark-text">
                    {api.name.length > 15
                      ? `${api.name.slice(0, 15)}...`
                      : api.name}
                  </h3>
                  <div className="hidden text-center md:col-span-2 sm:col-span-1 sm:flex sm:justify-center">
                    <p className="bg-light-secondary px-1 rounded-md text-xs text-dark-text">
                      {api.category}
                    </p>
                  </div>
                  <div className="flex items-center justify-end">
                    <EditApiModal obj={api} />
                    <DeleteApiModal id={api.id} />
                  </div>
                </div>
              )) : (
                <p
                  className="w-full text-center text-light-text dark:text-dark-text bg-light-primary dark:bg-dark-primary p-4 rounded-md shadow-md ring-1 ring-black ring-opacity-5"
                >
                  Não há api's cadastradas.
                </p>
              )
            }
            </section>

            <section className="w-full flex flex-col justify-center items-center space-y-5">
              <div className="w-full flex items-center justify-between border-b-[1px] dark:border-gray-700">
                <h2 className="font-bold text-xl text-light-text dark:text-dark-text">
                  Seus projetos:
                </h2>
              </div>

              {fronts.length ? fronts.map((front) => (
                <div
                  key={front.id}
                  className="w-full grid grid-cols-3 md:grid-cols-4 gap-4 items-center bg-light-primary dark:bg-dark-primary p-4 rounded-md shadow-md ring-1 ring-black ring-opacity-5"
                >
                  <div>
                    <img src={front.url_img || 'images/explorer.png'} alt="default" className="object-cover h-20 w-40 rounded-md" />
                  </div>
                  <h3 className="text-light-text dark:text-dark-text text-center font-medium md:col-span-2">
                    {front.name.length > 15
                      ? `${front.name.slice(0, 15)}...`
                      : front.name}
                  </h3>
                  <div className="flex items-center justify-end">
                    <EditPhotoModal front={front} />
                    <DeleteFrontModal id={front.id} url={front.url_img} />
                  </div>
                </div>
              )) : (
                <p
                  className="w-full text-center text-light-text dark:text-dark-text bg-light-primary dark:bg-dark-primary p-4 rounded-md shadow-md ring-1 ring-black ring-opacity-5"
                >
                  Não há projetos cadastrados.
                </p>
              )}
            </section>
          </section>
        </main>
      )}
      <Widget />
      <Footer />
    </div>
  );
}
