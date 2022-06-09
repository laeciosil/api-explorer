import React, { Component } from "react";
import Slider from "react-slick";
import CardApi from "./CardApi";

export default class Responsive extends Component {
  render() {
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
        {[...Array(5)].map((_, index) => <div key={index}><CardApi /></div>)}
      </Slider>
    );
  }
}

