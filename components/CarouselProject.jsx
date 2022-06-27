import Slider from 'react-slick';
import { useData } from '../hooks/useData';
import CardProject from './CardProject';

export default function CarouselProject() {
  const { apiById } = useData();

  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    variableWidth: true,
    adaptiveHeight: true,
    slidesToShow: apiById.fronts.length < 3 ? apiById.fronts.length : 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          variableWidth: true,
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,

        },
      },
      {
        breakpoint: 480,
        settings: {
          variableWidth: true,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    apiById.fronts.length ? (
      <div className="md:w-full md:pl-0 w-screen pl-4">
        <Slider {...settings}>
          {apiById && apiById.fronts.map((front) => (
            <div key={front} className="p-[2px]">
              <CardProject front={front} />
            </div>
          ))}
        </Slider>
      </div>
    ) : (
      <p
        className="w-full text-center text-light-text dark:text-dark-text bg-light-primary dark:bg-dark-primary p-5 rounded-md shadow-md ring-1 ring-black ring-opacity-5"
      >
        Não há projetos para essa api.
      </p>
    )
  );
}
