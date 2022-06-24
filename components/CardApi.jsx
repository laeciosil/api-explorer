import { Star } from 'phosphor-react';
import Link from 'next/link';

const STAR_NUMBER = 5;

function CardApi({ api, lengthTitle }) {
  return (
    <Link href={`/api-details/${api.id}`}>
      <div
        style={{ cursor: 'pointer' }}
        className="p-3 bg-light-primary rounded-md dark:bg-dark-primary shadow-lg ring-1 ring-black ring-opacity-5 space-y-2"
      >
        <h2 className="text-lg font-bold text-light-text dark:text-dark-text">
          {api.name.length > lengthTitle
            ? `${api.name.slice(0, lengthTitle)}...`
            : api.name}
        </h2>
        <p className="text-[#979899] text-base">
          {api.description.length > lengthTitle
            ? `${api.description.slice(0, lengthTitle)}...`
            : api.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="bg-light-secondary px-1 rounded-md text-xs text-dark-text">
            {api.category.length > 14
              ? `${api.category.slice(0, 14)}...`
              : api.category}
          </span>
          <div className="flex items-center ml-1">
            {[...Array(STAR_NUMBER)].map((_, index) => {
              const ratingValue = index + 1;
              return (
                <Star
                  key={ratingValue}
                  size={13}
                  weight="fill"
                  color={ratingValue <= api.rating ? '#ffc107' : '#e4e5e9'}
                />
              );
            })}
            <span className="bg-[#e4e5e9] text-light-secondary text-xs font-bold px-2 py-0.5 rounded dark:text-dark-secondary ml-1">{`${api.rating}.0`}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardApi;
