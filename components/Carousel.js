import React, { useContext } from "react";
import Slider from "react-slick";
import CardApi from "./CardApi";
import { AppContext } from "../context/AppContext";
export default function Carousel () {
  const {apis} = useContext(AppContext);
  // const randomAPi = () => {
  //   const apiArr = [];
  //   for (let index = 0; index < 5; index++) {
  //     apiArr.push(apis[Math.floor(Math.random() * apis.length)]);
  //   };
  //   return apiArr;
  // }
    var settings = {
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
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <Slider {...settings}>
      {apis.map(api => <div key={api}>
        <CardApi api={api}/>
      </div>)}
    </Slider>
  );
}

