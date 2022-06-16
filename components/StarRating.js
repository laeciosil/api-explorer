import { Star } from "phosphor-react";
const STAR_NUMBER = 5;

function StarRating({ rating }) {
  return (
    <div className="flex items-center">
      {[...Array(STAR_NUMBER)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <Star
            key={ ratingValue }
            weight="fill"
            size={25}
            color={ ratingValue <= rating ? '#ffc107' : '#e4e5e9' }
          />
        );
      })}
    </div>
  );
}

export default StarRating;