import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { List, X } from 'phosphor-react';
import InputSearch from './InputSearch';
import MenuDropdownCategories from './MenuDropdownCategories';
import MenuDropdownLogin from './MenuDropdownLogin';
import ToggleDarkMode from './ToggleDarkMode';

export default function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="relative flex items-center">
      <button
        type="button"
        onClick={openModal}
        title="Abrir menu mobile"
        className="lg:hidden"
      >
        <List weight="bold" size={25} className="text-light-secondary" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="absolute z-10 top-0 bottom-0 right-0 h-screen" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 w-0"
            enterTo="opacity-100 w-80"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 w-80"
            leaveTo="opacity-0 w-0"
          >
            <Dialog.Panel className="h-full p-4 transform overflow-hidden bg-light-primary dark:bg-dark-primary text-left align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="relative flex gap-5 items-center justify-between"
              >
                <button
                  type="button"
                  onClick={closeModal}
                  title="Fechar menu mobile"
                >
                  <X weight="bold" size={25} className="text-light-secondary" />
                </button>
                <InputSearch closeModal={closeModal} />
              </Dialog.Title>
              <div className="-mt-20 h-full flex flex-col items-center justify-center divide-y dark:divide-gray-600">
                <a
                  href="/"
                  className="pb-10 cursor-pointer text-light-text dark:text-dark-text hover:text-light-secondary transition-all"
                >
                  Home
                </a>
                <div className="py-10 px-4 flex justify-center">
                  <MenuDropdownCategories closeModal={closeModal} />
                </div>
                <div className="pr-5 pt-10 flex gap-4 items-center justify-center">
                  <MenuDropdownLogin />
                  <ToggleDarkMode />
                </div>
              </div>
            </Dialog.Panel>

          </Transition.Child>

        </Dialog>
      </Transition>
    </div>
  );
}
