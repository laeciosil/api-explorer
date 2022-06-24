import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import { X } from 'phosphor-react';
import { toast } from 'react-toastify';
import { useSession, signIn } from 'next-auth/react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import EvaluationForm from './EvaluationForm';
import { api } from '../services';
import { useUser } from '../hooks/useUser';
import { useData } from '../hooks/useData';

export default function EvaluationModal() {
  const { isCreatingEvaluation } = parseCookies();
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [userRating, setUserRating] = useState({});
  const { token } = useUser();
  const { data: session } = useSession();
  const { setEvaluations, apiById } = useData();
  const { evaluations } = useData();
  const { user } = useUser();

  async function closeModal() {
    destroyCookie(null, 'isCreatingEvaluation', {
      path: '/',
    });
    setIsOpen(false);
    setUserRating({});
    setRating(0);
    setMessage('');
  }

  function setEvaluationByUser() {
    const ratingExists = evaluations.find(({ user_id: id }) => id === user.id) || {};
    setUserRating(ratingExists);
    setRating(ratingExists.rating || 0);
    setMessage(ratingExists.message || '');
  }

  function openModal() {
    setIsOpen(true);
    setEvaluationByUser();
  }

  function verifySession() {
    if (session) {
      openModal();
    } else {
      setCookie(null, 'isCreatingEvaluation', 'true', { maxAge: 60 * 60, path: '/' });
      signIn('github');
    }
  }

  async function getEvaluations() {
    const response = await api.get(`ratings/by-api/${apiById.id}`);
    setEvaluations(response.data);
  }

  async function handleAddEvaluation() {
    const theme = localStorage.getItem('theme') || 'light';
    toast.info('Aguarde...', { theme, autoClose: 500 });
    try {
      const response = await api.post(
        'ratings',
        { rating, message, api_id: apiById.id },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        },
      );
      await getEvaluations();
      closeModal();
      toast.success(response.data.message, { theme });
      setCookie(null, 'refresh', 'true', { maxAge: 60 * 60, path: '/' });
    } catch (error) {
      toast.error(error.response.data.message, { theme });
    }
  }

  useEffect(() => {
    if (isCreatingEvaluation && user) {
      openModal();
      return;
    }
    if (user && evaluations) {
      setEvaluationByUser();
    }
  }, [user, evaluations]);

  const isDisabled = userRating && rating === userRating.rating && message === userRating.message;
  return (
    <>
      <button
        type="button"
        onClick={verifySession}
        className="rounded-md cursor-pointer py-2 px-7 border-2 border-light-secondary text-base text-light-secondary hover:bg-light-secondary hover:text-dark-text transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-light-primary dark:focus-visible:ring-offset-dark-primary focus-visible:ring-light-secondary focus-visible:ring-opacity-50"
      >
        {userRating.rating ? 'Editar' : 'Avaliar'}
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
                      message={message}
                      rating={rating}
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      disabled={isDisabled}
                      className="inline-flex justify-center rounded-md border border-transparent text-dark-text bg-light-secondary px-4 py-2 text-sm font-medium  hover:bg-[#737eff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-background dark:focus:ring-offset-dark-primary focus:ring-dark-secondary transition-colors disabled:opacity-50 disabled:hover:bg-dark-secondary"
                      onClick={handleAddEvaluation}
                    >
                      {userRating.rating ? 'Atualizar' : 'Adicionar'}
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
