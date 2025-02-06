// Import Swiper React components which we wanna use on the application
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper/modules';
import { RxArrowTopRight } from 'react-icons/rx';
// Import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';



function Carosello() {

    /* 
    destrutturazione dell'oggetto restituito da ""

    */



    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>
        </>
    );
}


export default Carosello;