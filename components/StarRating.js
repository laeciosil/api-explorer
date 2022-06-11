import { Star } from "phosphor-react";
const STAR_NUMBER = 5;
const RATING = 4;
function StarRating() {
  return (
    <div className="flex items-center">
      {[...Array(STAR_NUMBER)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <Star
            key={ ratingValue }
            weight="fill"
            size={25}
            color={ ratingValue <= RATING ? '#ffc107' : '#e4e5e9' }
          />
        );
      })}
    </div>
  );
}

export default StarRating;