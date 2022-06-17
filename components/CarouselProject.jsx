import Slider from 'react-slick';
import { useData } from '../hooks/useData';
import CardProject from './CardProject';

export default function CarouselProject() {
  const { apiById } = useData();

  // const randomAPi = () => {
  //   const apiArr = [];
  //   for (let index = 0; index < 5; index++) {
  //     apiArr.push(apis[Math.floor(Math.random() * apis.length)]);
  //   };
  //   return apiArr;
  // }
  const settings = {
    // className: "center",
    // centerMode: true,
    // centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // initialSlide: 0,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    apiById.fronts.length ? (
      <Slider {...settings}>
        {/* slider está mostrando os fronts duplicados. */}
        {apiById && apiById.fronts.map((front) => (
          <div key={front} className="cursor-pointer">
            <CardProject api={front} />
          </div>
        ))}

      </Slider>
    ) : (
      <p className="w-full text-center bg-light-primary dark:bg-dark-primary p-5 rounded-md">Não há projetos para essa api.</p>
    )
  );
}
