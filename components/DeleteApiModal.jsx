import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { X, WarningCircle } from 'phosphor-react';

export default function DeleteApiModal() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="rounded-md p-2 text-gray-400 hover:text-light-text hover:bg-gray-200 dark:hover:text-dark-text dark:hover:bg-gray-600 transition-all"
        title="Excluir"
      >
        <X weight="bold" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-light-primary dark:bg-dark-primary p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="reative w-full text-lg"
                  >
                    <button
                      type="button"
                      onClick={closeModal}
                      className="absolute top-4 right-4 rounded-md p-2 text-gray-400 hover:text-light-text hover:bg-gray-200 dark:hover:text-dark-text dark:hover:bg-gray-600 transition-all"
                      title="Fechar modal"
                    >
                      <X weight="bold" />
                    </button>
                  </Dialog.Title>

                  <div className="mt-4 flex flex-col items-center space-y-5">
                    <div className="mx-auto text-gray-400 dark:text-gray-200">
                      <WarningCircle size={70} />
                    </div>
                    <h3
                      className="text-lg text-center text-light-text dark:text-dark-text"
                    >
                      Tem certeza de que deseja excluir esta api?
                    </h3>
                    <div className="flex justify-center gap-4 mt-6">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent text-dark-text bg-red-600 px-4 py-3 text-sm font-medium  hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Sim, tenho certeza
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-gray-200 dark:border-gray-600 text-light-text dark:text-dark-text bg-light-primary dark:bg-[#374151] px-4 py-3 text-sm font-medium  hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
