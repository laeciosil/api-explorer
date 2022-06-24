import { UserCircle, CaretDown } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import { AiFillGithub } from 'react-icons/ai';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useUser } from '../hooks/useUser';

function MenuDropdownLogin() {
  const router = useRouter();
  const { data: session } = useSession();
  const { user } = useUser();
  const login = async () => {
    if (session) {
      await router.push('/');
      signOut();
    } else {
      signIn('github');
    }
  };

  const logout = async () => {
    await router.push('/');
    signOut();
  };

  const { getJWTToken } = useUser();

  if (session) {
    getJWTToken(session.accessToken);
  }

  return (
    <Popover className="relative text-base">
      <Popover.Button className="flex items-center gap-1 focus:outline-none hover:text-light-secondary dark:hover:text-light-secondary text-light-text dark:text-dark-text" title="Menu dropdown de login/logout">
        {session ? (
          <img
            src={session.user.image}
            alt={session.user.name}
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <UserCircle size={30} weight="light" />
        )}
        {!user ? 'Login' : user.name.split(' ')[0]}
        <CaretDown />
      </Popover.Button>
      <Popover.Panel className="absolute z-10">
        {!user ? (
          <div className="flex flex-col justify-center items-center w-56 h-40 space-y-2 bg-light-primary dark:bg-dark-primary left-0 top-9 rounded-md p-4 shadow-lg ring-1 ring-black dark:ring-[#282f36] ring-opacity-5 overflow-hidden text-light-text dark:text-dark-text">
            <p className="text-center">Faça o login com o github</p>
            <button
              type="button"
              className="p-2 flex gap-2 justify-center items-center rounded-md border-transparent w-full border-2 text-[#6772E5] border-[#6772E5] hover:bg-[#6772E5] hover:text-dark-text"
              onClick={() => login()}
              // onClick={() => signIn('github')}
              title="Botão que faz login com o github"
            >
              <AiFillGithub size={20} />
              GITHUB
            </button>
          </div>
        ) : (
          <div className="flex flex-col w-32 bg-light-primary dark:bg-dark-primary left-0 top-9 rounded-md shadow-lg ring-1 ring-black dark:ring-[#282f36] ring-opacity-5 overflow-auto">
            <button
              type="button"
              className="flex items-center w-full py-2 pl-3 pr-4 transition duration-150 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700 snap-start text-light-text dark:text-dark-text"
              onClick={() => router.push('/profile')}
              title="Botão que leva para o perfil"
            >
              Perfil
            </button>
            <button
              type="button"
              className="flex items-center w-full py-2 pl-3 pr-4 transition duration-150 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700 snap-start text-light-text dark:text-dark-text"
              onClick={logout}
              // onClick={signOut}
              title="Botão que faz logout"
            >
              Sair
            </button>
          </div>
        )}
      </Popover.Panel>
    </Popover>
  );
}

export default MenuDropdownLogin;
