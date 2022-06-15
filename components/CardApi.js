import { Star } from "phosphor-react";
const STAR_NUMBER = 5;

function CardApi({api, numberLength}) {
  return (
    <div className="mr-2 p-3 bg-light-primary rounded-md dark:bg-dark-primary shadow-lg ring-1 ring-black ring-opacity-5 space-y-2">
      <h2 className="text-lg font-bold text-light-text dark:text-dark-text">{api.name}</h2>
      <p className="text-[#979899] text-base">
        {api.description.length > numberLength ? `${api.description.slice(0, numberLength)}...` : api.description}
      </p>
      <div className="flex justify-between items-center">
        <span className="bg-light-secondary px-1 rounded-md text-xs text-dark-text">{api.category}</span>
        <div className="flex items-center">
          {[...Array(STAR_NUMBER)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <Star
                key={ ratingValue }
                size={13}
                weight="fill"
                color={ ratingValue <= api.rating ? '#ffc107' : '#e4e5e9' }
              />
            );
          })}
          <span className="bg-[#e4e5e9] text-light-secondary text-xs font-bold px-2 py-0.5 rounded dark:text-dark-secondary ml-3">{`${api.rating}.0`}</span>
        </div>
      </div>
    </div>
  );
}

export default CardApi;