import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import "swiper/css";

const Testimonial = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2.5}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="bg-black text-white rounded-4 p-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae at aut
          molestias itaque modi atque adipisci necessitatibus eaque est. Debitis
          vitae ipsum eum repellendus veritatis. Pariatur adipisci, dignissimos
          maiores praesentium officia neque nostrum sit numquam non iste
          accusantium consequatur qui beatae blanditiis laboriosam quaerat sint
          iure quasi assumenda reprehenderit ad laudantium. Minima deserunt,
          iste, explicabo nesciunt mollitia ratione repellendus rem perspiciatis
          doloribus aspernatur ut aliquam reiciendis omnis! Quisquam nesciunt
          corrupti nemo cupiditate ipsa dolore itaque, consequatur voluptate
          laboriosam, facere nisi! Iure natus sequi sint voluptatibus eligendi
          vel ex facilis dolore adipisci excepturi, nam similique ullam
          exercitationem aliquid! Saepe, reiciendis vel.
        </SwiperSlide>
        <SwiperSlide className="bg-black text-white rounded-4 p-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae at aut
          molestias itaque modi atque adipisci necessitatibus eaque est. Debitis
          vitae ipsum eum repellendus veritatis. Pariatur adipisci, dignissimos
          maiores praesentium officia neque nostrum sit numquam non iste
          accusantium consequatur qui beatae blanditiis laboriosam quaerat sint
          iure quasi assumenda reprehenderit ad laudantium. Minima deserunt,
          iste, explicabo nesciunt mollitia ratione repellendus rem perspiciatis
          doloribus aspernatur ut aliquam reiciendis omnis! Quisquam nesciunt
          corrupti nemo cupiditate ipsa dolore itaque, consequatur voluptate
          laboriosam, facere nisi! Iure natus sequi sint voluptatibus eligendi
          vel ex facilis dolore adipisci excepturi, nam similique ullam
          exercitationem aliquid! Saepe, reiciendis vel.
        </SwiperSlide>
        <SwiperSlide className="bg-black text-white rounded-4 p-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae at aut
          molestias itaque modi atque adipisci necessitatibus eaque est. Debitis
          vitae ipsum eum repellendus veritatis. Pariatur adipisci, dignissimos
          maiores praesentium officia neque nostrum sit numquam non iste
          accusantium consequatur qui beatae blanditiis laboriosam quaerat sint
          iure quasi assumenda reprehenderit ad laudantium. Minima deserunt,
          iste, explicabo nesciunt mollitia ratione repellendus rem perspiciatis
          doloribus aspernatur ut aliquam reiciendis omnis! Quisquam nesciunt
          corrupti nemo cupiditate ipsa dolore itaque, consequatur voluptate
          laboriosam, facere nisi! Iure natus sequi sint voluptatibus eligendi
          vel ex facilis dolore adipisci excepturi, nam similique ullam
          exercitationem aliquid! Saepe, reiciendis vel.
        </SwiperSlide>
        <SwiperSlide className="bg-black text-white rounded-4 p-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae at aut
          molestias itaque modi atque adipisci necessitatibus eaque est. Debitis
          vitae ipsum eum repellendus veritatis. Pariatur adipisci, dignissimos
          maiores praesentium officia neque nostrum sit numquam non iste
          accusantium consequatur qui beatae blanditiis laboriosam quaerat sint
          iure quasi assumenda reprehenderit ad laudantium. Minima deserunt,
          iste, explicabo nesciunt mollitia ratione repellendus rem perspiciatis
          doloribus aspernatur ut aliquam reiciendis omnis! Quisquam nesciunt
          corrupti nemo cupiditate ipsa dolore itaque, consequatur voluptate
          laboriosam, facere nisi! Iure natus sequi sint voluptatibus eligendi
          vel ex facilis dolore adipisci excepturi, nam similique ullam
          exercitationem aliquid! Saepe, reiciendis vel.
        </SwiperSlide>
        <SwiperSlide className="bg-black text-white rounded-4 p-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae at aut
          molestias itaque modi atque adipisci necessitatibus eaque est. Debitis
          vitae ipsum eum repellendus veritatis. Pariatur adipisci, dignissimos
          maiores praesentium officia neque nostrum sit numquam non iste
          accusantium consequatur qui beatae blanditiis laboriosam quaerat sint
          iure quasi assumenda reprehenderit ad laudantium. Minima deserunt,
          iste, explicabo nesciunt mollitia ratione repellendus rem perspiciatis
          doloribus aspernatur ut aliquam reiciendis omnis! Quisquam nesciunt
          corrupti nemo cupiditate ipsa dolore itaque, consequatur voluptate
          laboriosam, facere nisi! Iure natus sequi sint voluptatibus eligendi
          vel ex facilis dolore adipisci excepturi, nam similique ullam
          exercitationem aliquid! Saepe, reiciendis vel.
        </SwiperSlide>
        <SwiperSlide className="bg-black text-white rounded-4 p-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae at aut
          molestias itaque modi atque adipisci necessitatibus eaque est. Debitis
          vitae ipsum eum repellendus veritatis. Pariatur adipisci, dignissimos
          maiores praesentium officia neque nostrum sit numquam non iste
          accusantium consequatur qui beatae blanditiis laboriosam quaerat sint
          iure quasi assumenda reprehenderit ad laudantium. Minima deserunt,
          iste, explicabo nesciunt mollitia ratione repellendus rem perspiciatis
          doloribus aspernatur ut aliquam reiciendis omnis! Quisquam nesciunt
          corrupti nemo cupiditate ipsa dolore itaque, consequatur voluptate
          laboriosam, facere nisi! Iure natus sequi sint voluptatibus eligendi
          vel ex facilis dolore adipisci excepturi, nam similique ullam
          exercitationem aliquid! Saepe, reiciendis vel.
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Testimonial;
