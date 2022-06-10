import { Star } from "phosphor-react";
const STAR_NUMBER = 5;
const RATING = 4;

function CardApi() {
  return (
    <div className="mr-2 p-4 bg-light-primary rounded-md dark:bg-dark-primary shadow-lg ring-1 ring-black ring-opacity-5 space-y-1">
      <h2 className="text-lg font-bold text-light-text dark:text-dark-text">Nome da API</h2>
      <p className="text-[#979899] text-base">Descrição breve do que faz a api e como funciona.</p>
      <div className="flex justify-between items-center">
        <span className="bg-light-secondary px-1 rounded-md text-xs text-dark-text">Categoria</span>
        <div className="flex items-center">
          {[...Array(STAR_NUMBER)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <Star
                key={ ratingValue }
                weight="fill"
                color={ ratingValue <= RATING ? '#ffc107' : '#e4e5e9' }
              />
            );
          })}
          <span className="bg-[#e4e5e9] text-light-secondary text-xs font-bold  px-2.5 py-0.5 rounded dark:text-dark-secondary ml-3">{`${RATING}.0`}</span>
        </div>
      </div>
    </div>
  );
}

export default CardApi;