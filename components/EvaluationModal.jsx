import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { X } from 'phosphor-react';
import { toast } from 'react-toastify';
import { useSession, signIn } from 'next-auth/react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import EvaluationForm from './EvaluationForm';
import { api } from '../services';
import { useUser } from '../hooks/useUser';

export default function EvaluationModal({ apiId, setEvaluations, typeButton }) {
  const { isCreatingEvaluation } = parseCookies();
  const [isOpen, setIsOpen] = useState(!!isCreatingEvaluation);
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const { token } = useUser();
  const { data: session } = useSession();

  function closeModal() {
    destroyCookie(null, 'isCreatingEvaluation');
    destroyCookie(null, 'id');
    setCookie(null, 'refresh', 'true', { maxAge: 60 * 60, path: '/' });
    setIsOpen(false);
  }

  function openModal() {
    if (session) {
      setIsOpen(true);
    } else {
      setCookie(null, 'isCreatingEvaluation', 'true', { maxAge: 60 * 60, path: '/' });
      setCookie(null, 'id', `${apiId}`, { maxAge: 60 * 60, path: '/' });
      signIn();
    }
  }
  async function getEvaluations() {
    const response = await api.get(`ratings/by-api/${apiId}`);
    setEvaluations(response.data);
  }

  async function handleAddEvaluation() {
    const theme = localStorage.getItem('theme') || 'light';
    toast.info('Aguarde...', { theme, autoClose: 500 });
    try {
      const response = await api.post(
        'ratings',
        { rating, message, api_id: apiId },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        },
      );
      await getEvaluations();
      closeModal();
      toast.success(response.data.message, { theme });
    } catch (error) {
      toast.error(error.response.data.message, { theme });
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="rounded-md cursor-pointer py-2 px-7 border-2 border-light-secondary text-base text-light-secondary hover:bg-light-secondary hover:text-dark-text transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-light-primary dark:focus-visible:ring-offset-dark-primary focus-visible:ring-light-secondary focus-visible:ring-opacity-50"
      >
        {typeButton}
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
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-light-primary dark:bg-dark-primary p-5 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex items-center justify-between text-xl font-bold leading-6 text-light-text dark:text-dark-text"
                  >
                    Avaliação
                    <button
                      type="button"
                      onClick={closeModal}
                      className="rounded-md p-2 text-gray-400 hover:text-light-text hover:bg-gray-200 dark:hover:text-dark-text dark:hover:bg-gray-600 transition-all"
                    >
                      <X weight="bold" />
                    </button>
                  </Dialog.Title>
                  <div className="mt-2">
                    <EvaluationForm
                      setMessage={setMessage}
                      setRating={setRating}
                      rating={rating}
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent text-dark-text bg-light-secondary px-4 py-2 text-sm font-medium  hover:bg-[#737eff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-background dark:focus:ring-offset-dark-primary focus:ring-dark-secondary transition-colors disabled:opacity-50 disabled:hover:bg-dark-secondary"
                      onClick={handleAddEvaluation}
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
