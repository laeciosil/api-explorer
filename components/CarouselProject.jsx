import { useContext } from 'react';
import Slider from 'react-slick';
import { AppContext } from '../context/AppContext';
import CardProject from './CardProject';

export default function CarouselProject() {
  const { apis } = useContext(AppContext);
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
    // focusOnSelect: true,
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
    <Slider {...settings}>
      {apis && apis.map((api) => (
        <div key={api} className="cursor-pointer">
          <CardProject api={api} />
        </div>
      ))}
    </Slider>
  );
}
