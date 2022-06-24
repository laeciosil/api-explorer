import { ArrowLeft } from 'phosphor-react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { feedbackTypes } from './feebackTypes';
import { useUser } from '../../../../hooks/useUser';
import { api } from '../../../../services';
import { CloseButton } from '../../CloseButton';

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}) {
  const [message, setMessage] = useState('');
  const feedbackTypeInfo = feedbackTypes.find((obj) => obj.type === feedbackType);
  const { token } = useUser();

  async function handleSubmitFeedback(event) {
    event.preventDefault();
    const theme = localStorage.getItem('theme') || 'light';
    try {
      if (token) {
        await api.post(
          '/feedbacks/authenticated',
          { message, feedback_type: feedbackTypeInfo.type },
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          },
        );
        onFeedbackSent();
      } else {
        await api.post(
          '/feedbacks',
          { message, feedback_type: feedbackTypeInfo.type },
        );
        onFeedbackSent();
      }
    } catch (error) {
      toast.error(error.response.data.message, { theme });
    }
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="absolute top-3 left-5 rounded-md p-2 text-gray-400 hover:text-light-text hover:bg-gray-200 dark:hover:text-dark-text dark:hover:bg-gray-600 transition-all"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl justify-center leading-6 flex items-center gap-2 text-light-text dark:text-dark-text">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-[#979899] text-light-text dark:text-dark-text border-zinc-600 bg-transparent rounded-md focus:border-light-secondary focus:ring-light-secondary focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-300 dark:scrollbar-thumb-gray-600  scrollbar-track-transparent scrollbar-thin"
          placeholder="Escreva sua mensagem..."
          onChange={({ target }) => setMessage(target.value)}
        />
        <footer className="flex gap-2 mt-2">
          <button
            type="button"
            className="p-2 text-dark-text bg-dark-secondary rounded-md border-transparent flex-1 flex justify-center items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-background dark:focus:ring-offset-dark-primary focus:ring-dark-secondary transition-colors disabled:opacity-50 disabled:hover:bg-dark-secondary"
            disabled={message.length === 0}
            onClick={handleSubmitFeedback}
            title="Botão de enviar feedback"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
