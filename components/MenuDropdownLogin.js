import { UserCircle, CaretDown } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { AiFillGithub } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import { useUser } from "../hooks/useUser";
import { useRouter } from 'next/router'
function MenuDropdownLogin() {
  const router = useRouter()
  const { data: session } = useSession();
  // const  jwt = JSON.parse(localStorage.getItem("apiExplorer:user"))
  const login = async() => {
    if(session) {
       await router.push('/')
       signOut();
    } else {
      signIn()
    }
  };
  // console.log(jwt);
  const { getJWTToken } = useUser();

  if (session) {
    getJWTToken(session.accessToken);
  }

  return (
    <Popover className="relative text-base">
      <Popover.Button className="flex items-center gap-1 focus:outline-none hover:text-light-secondary">
        {session ? (
          <img
            src={session.user.image}
            alt={session.user.name}
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <UserCircle size={30} weight="light" />
        )}
        Login
        <CaretDown />
      </Popover.Button>
      <Popover.Panel className="absolute z-10">
        <div className="flex flex-col justify-center items-center w-56 h-40 space-y-2 bg-light-primary dark:bg-dark-primary left-0 top-9 rounded-md p-2 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <p>Login using github</p>
          <button onClick={login}>
            <AiFillGithub size={20} />
            GITHUB
          </button>
        </div>
      </Popover.Panel>
    </Popover>
  );
}

export default MenuDropdownLogin;
