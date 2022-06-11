import { Star } from "phosphor-react";
const rating = 5;
const STAR_NUMBER = 5;
function EvaluationForm() {
  return (
    <form className="w-full flex flex-col gap-4">
      <div className="flex">
        {[...Array(STAR_NUMBER)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <label
              htmlFor={ `${ratingValue}-rating` }
              key={ `${ratingValue}-rating` }
            >
              <input
                id={ `${ratingValue}-rating` }
                type="radio"
                name="rating"
                className="hidden"
                value={ ratingValue }
                onClick={() => {}}
              />
              <Star
                weight="fill"
                color={ ratingValue <= rating ? '#ffc107' : '#e4e5e9' }
              />
            </label>
          );
        })}
      </div>
      <textarea
        type="text"
        placeholder="Escreva sua mensagem"
        className="h-28 p-3 rounded-md bg-light-primary dark:bg-gray-600"
        name="message"
        onChange={() => {}}
      />
    </form>
  );
}

export default EvaluationForm;