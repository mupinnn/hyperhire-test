import Image from 'next/image';
import bgImage from './assets/background-2.png';
import avatarImage from './assets/avatar.png';
import avatarFlagImage from './assets/flag.png';
import { Navbar } from './components/navbar';

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
          <div className="py-1.5 px-3 rounded-lg bg-light-sky-blue w-fit">
            <p className="text-lg text-white">풀타임, 파트타임</p>
          </div>
          <h1 className="text-4xl text-white">최고의 실력을 가진 외국인 인재를 찾고 계신가요?</h1>
          <p className="text-lg text-white/80">법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.</p>
        </div>

        <div className="flex flex-col font-black">
          <div className="py-2 px-4 rounded-lg bg-nephritis/05 w-fit mb-6">
            <p className="text-trabuddy-alternative text-lg">월 100만원</p>
          </div>

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
