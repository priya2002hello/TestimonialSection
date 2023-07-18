//Testimony Content Component
import React from "react";

//import Testimonial Content 
import CustomerReviewDetails from "./CustomerInfoTestimony";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

//Testimony Content Component
export default function Testimonycontent() {
  return (
    <div className="Testimony-content">
      <Swiper
        slidesPerView={3}
        spaceBetween={100}
        pagination={{
          clickable: true,
        }}

        breakpoints={{
          0:{
            slidesPerView:1,
            spaceBetween:10
          },
          480:{
            slidesPerView:2,
            spaceBetween:10
          },
          768:{
            slidesPerView:3,
            spaceBetween:15
          },
          1024:{
            slidesPerView:3,
            spaceBetween:30
          }
        }}
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        {/* Adding info of Customer reviews to testimony section */}
        {CustomerReviewDetails.map((person) => (
          <SwiperSlide className="max-w-sm rounded overflow-hidden shadow-lg ">
            <div className="single-testimonial-card bg-cyan-50">
              <br></br>

              {/* align profile picture and name side by side */}
              <div className="flex items-center h-16">
                <div className="flex justify-center mb-6 w-20">
                  {/* Profile picture*/}
                  <img
                    className="rounded-full  border-double border-stone-900 border-4"
                    src={person.image}
                    alt=""
                  />
                </div>

                <div className="ml-3 font-bold text-xl mb-2">
                  {/* Name of Customer */}
                  <p className="text-sm text-blue-700">{person.name}</p>
                  {/*Company of person */}
                  <p className="text-sm text-gray-500">{person.company}</p>
                </div>
              </div>
            {/* Review section starts here ------------------------- */}
              <p className="text-justify text-gray-700 text-base px-6 py-4">
                {/* double quote svg  */}
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-left"
                  className="w-6 pr-2 inline-block"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
                {/* Customer review  */}
                {person.review}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
