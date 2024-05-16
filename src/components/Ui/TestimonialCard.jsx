import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from "../../assets/Images/star.png";
import profile from "../../assets/Images/testimonial-4 1.png";

function TestimonialCard() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true, // Add dots for navigation
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint for responsiveness
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: true, // Show arrows on mobile screens
          dots: false, // Hide dots on mobile screens
        },
      },
    ],
  };

  return (
    <div className="gap-32">
      <Slider {...settings}>
        <div className="bg-blue-300   rounded-xl overflow-hidden ">
          <div className="p-7">
            <div>
              <div className="flex">
                <img className="w-5" src={star} alt="" />
                <img className="w-5" src={star} alt="" />
                <img className="w-5" src={star} alt="" />
                <img className="w-5" src={star} alt="" />
                <img className="w-5" src={star} alt="" />
              </div>
            </div>

            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                necessitatibus excepturi perspiciatis neque, molestias, iure
                placeat voluptas laborum harum nem
              </p>
            </div>

            <div className="flex justify-between">
              <div>
                <img className="w-12" src={profile} alt="" />
              </div>

              <div>
                <p>Athf</p>
                <p>Web developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-300 w-56 h-auto rounded-xl overflow-hidden">
          <div className="p-7">
            <div>
              <div className="flex">
                <img className="w-5" src={star} alt="" />
                <img className="w-5" src={star} alt="" />
                <img className="w-5" src={star} alt="" />
                <img className="w-5" src={star} alt="" />
                <img className="w-5" src={star} alt="" />
              </div>
            </div>

            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                necessitatibus excepturi perspiciatis neque, molestias, iure
                placeat voluptas laborum harum nem
              </p>
            </div>

            <div className="flex justify-between">
              <div>
                <img className="w-12" src={profile} alt="" />
              </div>

              <div>
                <p>Athf</p>
                <p>Web developer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-300 w-56 h-auto rounded-xl overflow-hidden  ">
          <div className="p-7">
            <div>
              <div className="flex">
                <img className="w-5" src={star} alt="" />
                <img className="w-5" src={star} alt="" />
                <img className="w-5" src={star} alt="" />
                <img className="w-5" src={star} alt="" />
                <img className="w-5" src={star} alt="" />
              </div>
            </div>

            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                necessitatibus excepturi perspiciatis neque, molestias, iure
                placeat voluptas laborum harum nem
              </p>
            </div>

            <div className="flex justify-between">
              <div>
                <img className="w-12" src={profile} alt="" />
              </div>

              <div>
                <p>Athf</p>
                <p>Web developer</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default TestimonialCard;
