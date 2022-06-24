import { Star } from 'phosphor-react';
import { useData } from '../hooks/useData';
import EvaluationModal from './EvaluationModal';
import StarRating from './StarRating';
import { formatDate } from './utils';

function EvaluationSection() {
  const { evaluations } = useData();
  const STAR_NUMBER = 5;
  const rating = evaluations.reduce((acc, curr) => acc + curr.rating, 0) / evaluations.length || 0;

  return (
    evaluations && (
      <section className="w-full flex flex-col justify-center items-center space-y-5">
        <h2
          className="w-full border-b-[1px] pb-1 dark:border-gray-700 font-bold text-xl text-light-text dark:text-dark-text"
        >
          Avaliações
        </h2>
        <div className="w-full flex items-center">
          <div className="space-y-3 grow">
            <p className="md:text-6xl text-5xl font-bold text-light-text dark:text-dark-text">{rating.toFixed(1)}</p>
            <StarRating rating={rating} />
            <p className="text-base text-[#979899] font-normal">{`baseada em ${evaluations.length} avaliações`}</p>
          </div>
          <div className="flex">
            <EvaluationModal />
          </div>
        </div>
        {evaluations.length === 0 ? (
          <p
            className="w-full text-center bg-light-primary dark:bg-dark-primary p-5 rounded-md text-light-text dark:text-dark-text shadow-md ring-1 ring-black ring-opacity-5"
          >
            Não há avaliações para essa api.
          </p>
        ) : (
          <div className="w-full flex flex-col gap-4">
            {evaluations.map((evaluation) => (
              <div key={evaluation.id} className="flex items-center justify-between bg-light-primary dark:bg-dark-primary p-5 rounded-md shadow-md ring-1 ring-black ring-opacity-5">
                <div className="grow space-y-3">
                  <p className="text-base">{evaluation.message}</p>
                  <p className="text-sm text-[#979899] font-bold">{`${evaluation.user_name} em ${formatDate(evaluation.updated_at)}`}</p>
                </div>
                <div className="flex grow-0">
                  {[...Array(STAR_NUMBER)].map((_, index) => {
                    const ratingValue = index + 1;
                    return (
                      <Star
                        key={ratingValue}
                        weight="fill"
                        color={ratingValue <= evaluation.rating ? '#ffc107' : '#e4e5e9'}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    )
  );
}

export default EvaluationSection;
