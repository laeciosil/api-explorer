import Header from "../components/Header";
import Footer from "../components/Footer";
import { Avatar } from "flowbite-react";
import { PencilSimple, X } from "phosphor-react";
import { useSession, signOut } from "next-auth/react";

import NewApiModal from "../components/NewApiModal";
import DeleteApiModal from "../components/DeleteApiModal";
import { useUser } from "../hooks/useUser";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session } = useSession();
  const { user, apis } = useUser();
  const router = useRouter()
  const logout = async () => {
    await router.push("/");
    signOut();
  };
  return (
    <div className="flex flex-col w-screen h-screen bg-light-background dark:bg-dark-background overflow-x-hidden">
      <Header />
      <main className="w-full grow flex items-start justify-center relative bg-light-background dark:bg-dark-background">
        <section className="container w-[calc(100vw-2rem)] md:w-[56rem] my-9 space-y-5 flex flex-col justify-center items-center">
          <section>
            <Avatar rounded={true} stacked={true} size="xl">
              <div className="space-y-3 font-medium dark:text-white">
                <h2 className="text-4xl">{user && user.name}</h2>
                <button
                  type="button"
                  onClick={logout}
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
            {apis.map((item, index) => (
            <div key={index} className="w-full grid grid-cols-3 md:grid-cols-4 gap-4 items-center  bg-light-primary dark:bg-dark-primary p-5 rounded-md">
              <h3>{item.name}</h3>
              <p className='text-center md:col-span-2'>{item.date}</p>
              <div className='flex items-center gap-3 justify-end'>
                <button 
                  type='button' 
                  className="rounded-md p-2 text-gray-400 hover:text-light-text hover:bg-gray-200 dark:hover:text-dark-text dark:hover:bg-gray-600 transition-all"
                >
                  <PencilSimple weight='bold'/>
                </button>
                <DeleteApiModal />
              </div>
            </div>
          ))}
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}
