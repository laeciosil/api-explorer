import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { X } from 'phosphor-react';
import { toast } from 'react-toastify';
import { api } from '../services';
import { useUser } from '../hooks/useUser';
import { useData } from '../hooks/useData';
import EditPhotoForm from './EditPhotoForm';

export default function EditPhotoModal({ front }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [photo, setPhoto] = useState({});
  const [path, setPath] = useState('Escolha uma imagem');
  const { token } = useUser();
  const { getFrontById } = useData();
  const theme = localStorage.getItem('theme') || 'light';

  function closeModal() {
    setIsOpen(false);
    setPhoto({});
    setPath('Escolha uma imagem');
    getFrontById(front.id);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleDrop([uploadedFile]) {
    setPath(uploadedFile.path);
    setPhoto(uploadedFile);
  }

  async function addPhoto() {
    setIsUploading(true);
    setPath('Enviando...');
    const data = new FormData();
    data.append('file', photo, photo.name);

    try {
      const response = await api.put(`/fronts/image/${front.id}`, data, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      toast.success(response.data.message, { theme });
      closeModal();
    } catch (error) {
      toast.error(error.response.data.message, { theme });
    }
    return setIsUploading(false);
  }

  async function handleSubmit() {
    const key = front.url_img.split('com/')[1];
    try {
      await api.delete(`/fronts/image/${front.id}?Key=${key}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      await addPhoto();
    } catch (error) {
      toast.error('Não foi possível alterar a foto', { theme });
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="text-light-secondary hover:text-[#737eff] font-normal transition-all"
      >
        Alterar Foto
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-light-primary dark:bg-dark-primary p-5 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex items-center justify-between text-xl font-bold leading-6 text-light-text
                    dark:text-dark-text"
                  >
                    Alterar Foto
                    <button
                      type="button"
                      onClick={closeModal}
                      className="rounded-md p-2 text-gray-400 hover:text-light-text hover:bg-gray-200 dark:hover:text-dark-text dark:hover:bg-gray-600 transition-all"
                    >
                      <X weight="bold" />
                    </button>
                  </Dialog.Title>
                  <div className="w-full mt-2">
                    <EditPhotoForm
                      handleDrop={handleDrop}
                      path={path}
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      type="button"
                      disabled={isUploading}
                      className="inline-flex justify-center rounded-md border border-transparent text-dark-text bg-light-secondary px-4 py-2 text-sm font-medium hover:bg-[#737eff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-background dark:focus:ring-offset-dark-primary focus:ring-dark-secondary transition-colors disabled:opacity-50 disabled:hover:bg-dark-secondary"
                      onClick={handleSubmit}
                    >
                      Alterar
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
