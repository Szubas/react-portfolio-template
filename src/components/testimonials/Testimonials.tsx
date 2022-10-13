import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae at debitis magnam! Sint, nulla porro necessitatibus ab magni quod voluptas!",
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae at debitis magnam! Sint, nulla porro necessitatibus ab magni quod voluptas!",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae at debitis magnam! Sint, nulla porro necessitatibus ab magni quod voluptas!",
  },
  {
    avatar: AVTR4,
    name: "Nana Anna McBrown",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae at debitis magnam! Sint, nulla porro necessitatibus ab magni quod voluptas!",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar one" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
