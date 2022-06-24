import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { X } from 'phosphor-react';
import { toast } from 'react-toastify';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import NewApiForm from './NewApiForm';
import { api } from '../services';
import { useUser } from '../hooks/useUser';

export default function NewApiModal() {
  const { isCreatingApi } = parseCookies();
  const { token, getApis } = useUser();
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [isOpenApiModal, setIsOpenApiModal] = useState(!!isCreatingApi);

  function closeModal() {
    destroyCookie(null, 'isCreatingApi', {
      path: '/',
    });
    setIsOpenApiModal(false);
    setCategory('');
    setDescription('');
    setUrl('');
  }

  function openModal() {
    setIsOpenApiModal(true);
  }

  async function handleAddApi() {
    const theme = localStorage.getItem('theme') || 'light';
    toast.info('Aguarde...', { theme, autoClose: 500 });

    try {
      const response = await api.post(
        '/apis',
        { url, category, description },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        },
      );
      if (response.status === 201) {
        await getApis(token);
        toast.success(response.data.message, { theme });
        setCookie(null, 'refresh', 'true', { maxAge: 60 * 60, path: '/' });
        closeModal();
      }
    } catch (error) {
      toast.error(error.response.data.message, { theme });
    }
  }
  const isDisabled = !url || !category || category === 'Qual a categoria?' || !description;

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="text-light-secondary hover:text-[#737eff] font-normal transition-all"
      >
        + add api
      </button>
      <Transition appear show={isOpenApiModal} as={Fragment}>
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
            <div className="fixed inset-0 bg-[#888A93] bg-opacity-60 dark:bg-[#121727] dark:bg-opacity-80" />
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
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-light-primary dark:bg-dark-primary p-5 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex items-center justify-between text-xl font-bold leading-6 text-light-text
                    dark:text-dark-text"
                  >
                    Adicionar Api
                    <button
                      type="button"
                      onClick={closeModal}
                      className="rounded-md p-2 text-gray-400 hover:text-light-text hover:bg-gray-200 dark:hover:text-dark-text dark:hover:bg-gray-600 transition-all"
                    >
                      <X weight="bold" />
                    </button>
                  </Dialog.Title>
                  <div className="mt-2">
                    <NewApiForm
                      setCategory={setCategory}
                      setDescription={setDescription}
                      setUrl={setUrl}
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      disabled={isDisabled}
                      className="inline-flex justify-center rounded-md border border-transparent text-dark-text bg-light-secondary px-4 py-2 text-sm font-medium hover:bg-[#737eff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-background dark:focus:ring-offset-dark-primary focus:ring-dark-secondary transition-colors disabled:opacity-50 disabled:hover:bg-dark-secondary"
                      onClick={handleAddApi}
                    >
                      Adicionar
                    </button>
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
