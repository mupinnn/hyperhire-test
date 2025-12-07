'use client';

import { useState } from 'react';
import Image from 'next/image';
import avatarImage from '@/app/assets/avatar.png';
import avatarFlagImage from '@/app/assets/flag.png';
import { cn } from '@/app/libs/utils.lib';
import { CaretRigtIcon } from '../icons/caret-right';
import { CaretLeftIcon } from '../icons/caret-left';

const talents = [...Array(3).keys()].map(() => ({
  name: 'Abhishek Gupta',
  role: '마케팅',
  yoe: '2y+',
  skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
}));

type Indexes = {
  prevIndex: number;
  currentIndex: number;
  nextIndex: number;
};

const setCardClasses = (indexes: Indexes, cardIndex: number) => {
  if (indexes.currentIndex === cardIndex) {
    return 'bg-white scale-100 translate-x-0 z-30';
  } else if (indexes.nextIndex === cardIndex) {
    return 'bg-azure scale-90 translate-x-10 z-20 md:translate-x-32';
  } else if (indexes.prevIndex === cardIndex) {
    return 'bg-azure scale-90 -translate-x-10 z-10 md:-translate-x-32';
  }

  return 'opacity-0 scale-0 translate-x-0 z-10';
};

export function HomeSlider() {
  const [indexes, setIndexes] = useState<Indexes>({
    prevIndex: talents.length - 1,
    currentIndex: 0,
    nextIndex: 1,
  });

  const handleRightButton = () => {
    if (indexes.currentIndex >= talents.length - 1) {
      setIndexes({
        prevIndex: talents.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes((prevState) => ({
        prevIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex: prevState.currentIndex + 2 === talents.length ? 0 : prevState.currentIndex + 2,
      }));
    }
  };

  const handleLeftButton = () => {
    if (indexes.currentIndex <= 0) {
      setIndexes({
        prevIndex: talents.length - 2,
        currentIndex: talents.length - 1,
        nextIndex: 0,
      });
    } else {
      setIndexes((prevState) => ({
        prevIndex: prevState.currentIndex - 1 <= 0 ? talents.length - 1 : prevState.currentIndex - 2,
        currentIndex: prevState.currentIndex - 1,
        nextIndex: prevState.currentIndex,
      }));
    }
  };

  return (
    <div className="relative h-[314px] mx-auto flex justify-center w-full max-w-[355px] sm:h-[408px] md:max-w-[540px]">
      <button
        onClick={handleLeftButton}
        className="text-white absolute -left-3.5 top-1/2 -translate-y-1/2 z-50 md:-left-6">
        <CaretLeftIcon className="md:size-8" />
      </button>
      <button
        onClick={handleRightButton}
        className="text-white absolute -right-3.5 top-1/2 -translate-y-1/2 z-50 md:-right-6">
        <CaretRigtIcon className="md:size-8" />
      </button>

      {talents.map((talent, i) => (
        <div
          key={i}
          className={cn(
            'bg-white rounded-xl py-9 px-4 h-full flex flex-col gap-4 items-center justify-center max-w-[245px] shrink-0 transition-all scale-100 translate-x-10 absolute shadow-[0px_13.84px_22.15px_0px_#0000001F] sm:max-w-[290px]',
            setCardClasses(indexes, i),
          )}>
          <div className="relative flex items-center justify-center">
            <Image
              alt="Abhishek Gupta's avatar"
              src={avatarImage}
              placeholder="blur"
              sizes="64px"
              className="size-16 rounded-full sm:size-[120px]"
              style={{ objectFit: 'cover' }}
            />
            <Image
              alt="Abhishek Gupta's country"
              src={avatarFlagImage}
              placeholder="blur"
              className="absolute -right-1 bottom-0 w-[25px] h-[18px] sm:right-2 sm:bottom-1"
            />
          </div>
          <div className="text-center">
            <p className="text-blue-gray/90 font-poppins text-lg sm:text-2xl">{talent.name}</p>
            <p className="font-poppins text-sm text-blueberry sm:text-base">
              {talent.role} &bull; {talent.yoe}
            </p>
          </div>
          <div className="flex flex-wrap gap-1 items-center justify-center sm:mt-5">
            {talent.skills.map((skill) => (
              <div
                key={skill}
                className="text-sm font-notoKR text-blue-gray/60 rounded-md border border-blue-gray/40 px-3 py-1 text-center sm:text-base">
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
