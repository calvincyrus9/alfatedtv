// src/app/components/home/Testimonials.js
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './Testimonials.module.css';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonialsData = [
  {
    name: "Alex Johnson",
    role: "Sports Fanatic",
    content: `${siteConfig.name} is a game-changer. I get every match, every race, all in crystal-clear HD. The stability is incredible—zero buffering during the final moments of a game!`,
  },
  {
    name: "Samantha Blue",
    role: "Movie Lover",
    content: "The on-demand library is my favorite part. It's like having a personal cinema at home. New movies are added so quickly, and the quality is always top-notch.",
  },
  {
    name: "Carlos Gomez",
    role: "Busy Parent",
    content: "This service saved us. There's always something for the kids to watch, and we can catch up on our favorite series after they go to bed. The multi-device plan is perfect for our family.",
  }
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>What Our Users Say</h2>
          <p className={styles.subtitle}>
            Trusted by a global community of entertainment lovers.
          </p>
        </div>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          className={styles.swiper}
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={styles.testimonialCard}>
                <FaQuoteLeft className={styles.quoteIcon} />
                <p className={styles.testimonialContent}>&#34;{testimonial.content}&#34;</p>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{testimonial.name}</h4>
                  <p className={styles.authorRole}>{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
