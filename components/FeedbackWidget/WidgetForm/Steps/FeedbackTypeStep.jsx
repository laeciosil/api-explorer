import Image from 'next/image';
import { feedbackTypes } from './feebackTypes';
import { CloseButton } from '../../CloseButton';

export function FeedbackTypeStep(props) {
  const { feedbackTypeChanged } = props;
  return (
    <>
      <header className="flex justify-center items-center text-lg font-bold leading-6 text-light-text dark:text-dark-text">
        <span className="text-xl text-center leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {feedbackTypes.map((item) => (
          <button
            key={item.type}
            type="button"
            onClick={() => feedbackTypeChanged(item.type)}
            className="flex-1 flex flex-col items-center bg-light-background dark:bg-[#374151] rounded-lg py-5 w-20 pp:w-24 gap-2 border-2 border-transparent hover:border-light-secondary focus:border-light-secondary focus:outline-none"
            title={`Botão de feedback ${item.title}`}
          >
            <Image src={item.image.source} alt={item.image.alt} width={50} height={50} />
            <span className="text-light-text dark:text-dark-text">{item.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}
