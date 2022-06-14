import { Star } from "phosphor-react";
import EvaluationModal from "./EvaluationModal";
import StarRating from "./StarRating";
const evaluations = [
  {
    id: 0,
    message: 'Uma api incrível. Usei em vários projetos. Recomendo',
    rating: 4,
    name: 'Thiago',
    date: '11/06/2022'
  },
  {
    id: 0,
    message: 'Uma api incrível. Usei em vários projetos. Recomendo',
    rating: 4,
    name: 'Thiago',
    date: '11/06/2022'
  },
];
const rating = 5;
const STAR_NUMBER = 5;
function EvaluationSection() {
  return (
    <section className="w-full flex flex-col justify-center items-center space-y-5">
        <h2 className="w-full border-b-[1px] pb-1 dark:border-gray-700 font-bold text-xl">Avaliações</h2>
        <div className="w-full flex items-center">
          <div className="space-y-3 grow">
            <p className="text-6xl font-bold">{evaluations.lenght !== 0 ? `${evaluations[0].rating}.0` : '0.0'}</p>
            <StarRating />
            <p className="text-base text-[#979899] font-normal">{`baseada em ${evaluations.length} avaliações`}</p>
          </div>
          <div className="flex">
            <EvaluationModal />
          </div>
        </div>
        {evaluations.length === 0 ? (
          <p className="w-full text-center bg-light-primary dark:bg-dark-primary p-5 rounded-md">Não há avaliações para essa api.</p>
        ) : (
          <div className="w-full flex flex-col gap-4">
            {evaluations.map((evaluation) => (
              <div key={ evaluation.id } className="flex items-center justify-between bg-light-primary dark:bg-dark-primary p-5 rounded-md shadow-md ring-1 ring-black ring-opacity-5">
                <div className="grow space-y-3">
                  <p className="text-base">{evaluation.message}</p>
                  <p className="text-sm text-[#979899] font-bold">{`${evaluation.name} em ${evaluation.date}`}</p>
                </div>
                <div className="flex grow-0">
                  {[...Array(STAR_NUMBER)].map((_, index) => {
                    const ratingValue = index + 1;
                    return (
                      <Star
                        key={ ratingValue }
                        weight="fill"
                        color={ ratingValue <= rating ? '#ffc107' : '#e4e5e9' }
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
  );
}

export default EvaluationSection;