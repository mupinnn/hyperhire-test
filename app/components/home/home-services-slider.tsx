'use client';

import { motion } from 'motion/react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';

const services = [
  '해외 마케팅',
  '퍼블리셔',
  '캐드원(제도사)',
  '해외 세일즈',
  '해외 CS',
  '해외 마케팅',
  '퍼블리셔',
  '캐드원(제도사)',
  '해외 세일즈',
  '해외 CS',
];

export function HomeServicesSlider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="hidden w-full xl:block">
      <Swiper
        modules={[Autoplay]}
        loop
        spaceBetween={10}
        slidesPerView={4.5}
        autoplay={{ delay: 5000 }}
        className="!overflow-visible">
        {services.map((service, i) => (
          <SwiperSlide key={i + service} className="p-4 rounded-lg bg-white/20 !flex items-center gap-6 !w-[322px]">
            <div className="bg-white/40 size-14 rounded-lg" />
            <p className="font-notoKR text-2xl text-white">{service}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
