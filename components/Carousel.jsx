import Slider from 'react-slick';
import {
  useState, useEffect,
} from 'react';
import { useData } from '../hooks/useData';
import CardApi from './CardApi';

export default function Carousel() {
  const { apis } = useData();
  const [randomApis, setRandomApis] = useState([]);

  useEffect(() => {
    const randonApis = () => {
      const apiList = apis.map((api) => api);
      for (let i = apiList.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [apiList[i], apiList[j]] = [apiList[j], apiList[i]];
      }
      setRandomApis(apiList.slice(0, 5));
    };
    randonApis();
  }, [apis]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
    <Slider {...settings}>
      {apis && randomApis.map((api) => (
        <div key={api} className="px-[2px]">
          <CardApi api={api} lengthTitle={24} />
        </div>
      ))}
    </Slider>
  );
}
