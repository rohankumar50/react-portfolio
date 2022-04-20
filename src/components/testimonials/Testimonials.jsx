import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper'
import 'swiper/css';


function Testimonials() {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials_container"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <article className='testimonial'>
                        <div className="client_avatar">
                            <img src={AVTR1} alt="" />
                        </div>
                        <h5 className='client_name'>Ernest Achiever</h5>
                        <small className='client_review'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et adipisci enim libero, eveniet necessitatibus quos inventore, eos molestiae animi perferendis sequi deserunt, nesciunt commodi natus ullam amet reprehenderit ex doloribus eius quia sint dicta quod esse. Hic, vitae repudiandae non laudantium tempora nesciunt sequi natus deserunt quo repellat omnis perferendis, eos corporis harum expedita ad iure provident aspernatur recusandae labore pariatur nostrum. Tempora corrupti quia, doloremque dolore, rem soluta provident a rerum, dolores quae sit cumque accusamus. Architecto nulla.
                        </small>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className='testimonial'>
                        <div className="client_avatar">
                            <img src={AVTR1} alt="" />
                        </div>
                        <h5 className='client_name'>Ernest Achiever</h5>
                        <small className='client_review'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et adipisci enim libero, eveniet necessitatibus quos inventore, eos molestiae animi perferendis sequi deserunt, nesciunt commodi natus ullam amet reprehenderit ex doloribus eius quia sint dicta quod esse. Hic, vitae repudiandae non laudantium tempora nesciunt sequi natus deserunt quo repellat omnis perferendis, eos corporis harum expedita ad iure provident aspernatur recusandae labore pariatur nostrum. Tempora corrupti quia, doloremque dolore, rem soluta provident a rerum, dolores quae sit cumque accusamus. Architecto nulla.
                        </small>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className='testimonial'>
                        <div className="client_avatar">
                            <img src={AVTR1} alt="" />
                        </div>
                        <h5 className='client_name'>Ernest Achiever</h5>
                        <small className='client_review'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et adipisci enim libero, eveniet necessitatibus quos inventore, eos molestiae animi perferendis sequi deserunt, nesciunt commodi natus ullam amet reprehenderit ex doloribus eius quia sint dicta quod esse. Hic, vitae repudiandae non laudantium tempora nesciunt sequi natus deserunt quo repellat omnis perferendis, eos corporis harum expedita ad iure provident aspernatur recusandae labore pariatur nostrum. Tempora corrupti quia, doloremque dolore, rem soluta provident a rerum, dolores quae sit cumque accusamus. Architecto nulla.
                        </small>
                    </article>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Testimonials