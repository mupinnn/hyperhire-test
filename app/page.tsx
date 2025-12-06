import Image from 'next/image';
import bgImage from './assets/background-2.png';
import avatarImage from './assets/avatar.png';
import avatarFlagImage from './assets/flag.png';
import { Navbar } from './components/navbar';
import { Tooltip } from './components/ui/tooltip';

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="fixed h-screen w-screen overflow-hidden z-[-1]">
        <Image
          alt="grainy gradient background"
          src={bgImage}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
        />
      </div>

      <section className="flex flex-col px-4 pt-9 pb-[60px] gap-9">
        <div className="flex flex-col gap-4 font-black font-notoKR">
          <Tooltip color="blue">
            <p>풀타임, 파트타임</p>
          </Tooltip>
          <h1 className="text-4xl text-white">최고의 실력을 가진 외국인 인재를 찾고 계신가요?</h1>
          <p className="text-lg text-white/80">법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.</p>
        </div>

        <div className="flex flex-col font-black">
          <Tooltip color="green" className="mb-6 flex items-center gap-2.5" arrowPosition="bottomCenter">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="13" cy="13" r="13" fill="#BBF3D2" />
              <path
                d="M17.1833 9.10332C16.5984 9.10332 16.1416 8.63165 15.8297 8.13687C15.7847 8.06539 15.7352 7.99643 15.6812 7.92998C15.4204 7.60063 15.0671 7.35361 14.621 7.18893C14.175 7.02426 13.6673 6.94192 13.0978 6.94192C12.5008 6.94192 11.9759 7.03455 11.523 7.21981C11.0702 7.40507 10.7202 7.66581 10.4732 8.00203C10.2262 8.33139 10.1027 8.70877 10.1027 9.13419C10.1027 9.76546 10.36 10.2526 10.8746 10.5957C11.3961 10.9319 12.0445 11.1927 12.8199 11.3779L14.2505 11.7587C15.4925 12.0675 16.5183 12.541 17.3279 13.1791C18.1445 13.8172 18.5527 14.747 18.5527 15.9683C18.5527 16.8123 18.3332 17.5671 17.894 18.2326C17.4617 18.8914 16.827 19.406 15.9899 19.7765C15.1597 20.147 14.1716 20.3323 13.0257 20.3323C11.9142 20.3323 10.9501 20.1539 10.1336 19.7971C9.32391 19.4403 8.68578 18.936 8.21919 18.2841C7.9764 17.9398 7.79006 17.5611 7.66018 17.148C7.46317 16.5212 8.00211 15.958 8.65908 15.958C9.25347 15.958 9.71338 16.4427 10.0073 16.9593C10.0705 17.0704 10.1434 17.1757 10.2262 17.2755C10.5281 17.6323 10.9192 17.8999 11.3995 18.0783C11.8867 18.2567 12.4253 18.3424 13.0154 18.3356C13.6467 18.3356 14.2128 18.2361 14.7137 18.0371C15.2146 17.8381 15.6057 17.5568 15.887 17.1931C16.1683 16.8295 16.309 16.4075 16.309 15.9272C16.309 15.5155 16.1924 15.1655 15.9591 14.8773C15.7258 14.5891 15.4067 14.3559 15.0019 14.1775C14.597 13.9991 14.0961 13.8309 13.4992 13.6731L11.7289 13.21C10.4801 12.8669 9.51946 12.3763 8.84703 11.7382C8.18145 11.0932 7.8521 10.2664 7.85896 9.2577C7.85896 8.41373 8.08539 7.66581 8.53826 7.01396C8.99798 6.36211 9.62925 5.86122 10.4321 5.51128C11.2417 5.15448 12.1474 4.97607 13.1492 4.97607C14.1442 4.97607 15.0327 5.15448 15.815 5.51128C16.604 5.86122 17.2182 6.35182 17.6573 6.98309C17.8757 7.28891 18.0423 7.61449 18.1571 7.95983C18.3587 8.56655 17.8226 9.10332 17.1833 9.10332Z"
                fill="#00C696"
              />
              <path d="M13.1904 4L13.1904 5.8291" stroke="#00C696" stroke-width="2" stroke-linecap="round" />
              <path d="M13.1904 19.418L13.1904 21.2471" stroke="#00C696" stroke-width="2" stroke-linecap="round" />
            </svg>

            <p>월 100만원</p>
          </Tooltip>

          <div className="bg-white rounded-xl py-9 px-4 flex flex-col gap-4 items-center justify-center max-w-[245px]">
            <div className="relative flex items-center justify-center">
              <Image
                alt="Abhishek Gupta's avatar"
                src={avatarImage}
                placeholder="blur"
                sizes="64px"
                className="size-16 rounded-full"
                style={{ objectFit: 'cover' }}
              />
              <Image
                alt="Abhishek Gupta's country"
                src={avatarFlagImage}
                placeholder="blur"
                className="absolute -right-1 bottom-0 w-[25px] h-[18px]"
              />
            </div>
            <div className="text-center">
              <p className="text-blue-gray/90 font-poppins text-lg">Abhishek Gupta</p>
              <p className="font-poppins text-sm text-blueberry">마케팅 · 2y+</p>
            </div>
            <div className="flex flex-wrap gap-1 items-center justify-center">
              {['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'].map((t) => (
                <div
                  key={t}
                  className="text-sm font-notoKR text-blue-gray/60 rounded-md border border-blue-gray/40 px-3 py-1 text-center">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-2 w-fit">
            {['한국어 능력', '업무 수행 능력', '겸업 여부', '평판 조회'].map((t) => (
              <div className="flex items-center gap-3" key={t}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="6" fill="#E8ECFF" />
                  <path
                    d="M14.6663 6.5L8.24967 12.9167L5.33301 10"
                    stroke="#2C599B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-white font-notoKR">{t}</span>
              </div>
            ))}
          </div>
          <p className="font-notoKR text-yellow-sun underline">개발자가 필요하신가요?</p>
        </div>
      </section>
    </>
  );
}
