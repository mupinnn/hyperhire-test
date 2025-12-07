'use client';

import { motion } from 'motion/react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MarketingIcon } from '../icons/marketing';
import { ImageIcon } from '../icons/image';
import { BoxIcon } from '../icons/box';
import { TargetIcon } from '../icons/target';
import { CallIcon } from '../icons/call';

import 'swiper/css';
import 'swiper/css/autoplay';

const services = [
  {
    label: '해외 마케팅',
    icon: MarketingIcon,
  },
  {
    label: '퍼블리셔',
    icon: ImageIcon,
  },
  {
    label: '캐드원(제도사)',
    icon: BoxIcon,
  },
  {
    label: '해외 세일즈',
    icon: TargetIcon,
  },
  {
    label: '해외 CS',
    icon: CallIcon,
  },
];
const duplicatedServices = [...services, ...services];

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
        {duplicatedServices.map((service, i) => (
          <SwiperSlide key={i} className="p-4 rounded-lg bg-white/20 !flex items-center gap-6 !w-[322px]">
            <div className="bg-white/40 size-14 rounded-lg flex justify-center items-center">
              <service.icon />
            </div>
            <p className="font-notoKR text-2xl text-white">{service.label}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
