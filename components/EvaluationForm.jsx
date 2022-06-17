import { Star } from 'phosphor-react';
import { RadioGroup } from '@headlessui/react';

const STAR_NUMBER = 5;

function EvaluationForm({
  setRating, setMessage, rating, message,
}) {
  return (
    <form className="w-full flex flex-col gap-4">
      <div className="flex">
        {[...Array(STAR_NUMBER)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <RadioGroup value="rating" onChange={setRating} key={index}>
              <RadioGroup.Option value={ratingValue}>
                <Star
                  weight="fill"
                  size={20}
                  color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
                  className="cursor-pointer"
                />
              </RadioGroup.Option>
            </RadioGroup>
          );
        })}
      </div>
      <textarea
        type="text"
        placeholder="Escreva sua mensagem"
        value={message}
        className="h-28 p-3 rounded-md bg-light-primary dark:bg-dark-primary focus:border-light-secondary focus:ring-light-secondary focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-300 dark:scrollbar-thumb-gray-600  scrollbar-track-transparent scrollbar-thin"
        name="message"
        onChange={({ target }) => setMessage(target.value)}
      />
    </form>
  );
}

export default EvaluationForm;
