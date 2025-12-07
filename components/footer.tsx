import { HyperhireLogoColored } from './hyperhire-logo';
import { AvatarIcon } from './icons/avatar';
import { CodeIcon } from './icons/code';
import { GearIcon } from './icons/gear';
import { KorIcon } from './icons/kor';

const services = [
  {
    label: '해외 개발자 원격 채용',
    icon: CodeIcon,
  },
  {
    label: '외국인 원격 채용 (비개발)',
    icon: AvatarIcon,
  },
  {
    label: '한국어 가능 외국인 채용',
    icon: KorIcon,
  },
  {
    label: '해외 개발자 활용 서비스',
    icon: GearIcon,
  },
];

export function Footer() {
  return (
    <footer className="bg-lotion text-blue-gray/80 font-notoKR">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[auto_1fr] md:gap-4 lg:gap-12">
        <div className="space-y-[18px]">
          <div className="space-y-4">
            <HyperhireLogoColored />
            <p className="text-sm">우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</p>
          </div>
          <div className="space-y-2 font-sans text-sm text-blue-gray/60">
            <p>010-0000-0000</p>
            <p>aaaaa@naver.com</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-[18px] md:mt-0 xl:grid-cols-4">
          {services.map((service, i) => (
            <div key={i} className="flex flex-col gap-4 font-notoKR bg-white p-4 rounded-xl">
              <div className="space-y-3 grow">
                <div className="size-10 bg-anti-flash-white rounded-lg flex items-center justify-center">
                  <service.icon />
                </div>
                <p className="text-sm">{service.label}</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm">바로가기</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.59663 2.91675C4.36079 2.91675 2.91663 4.27925 2.91663 6.38758V13.6117C2.91663 15.7201 4.36079 17.0834 6.59663 17.0834H13.4033C15.6391 17.0834 17.0833 15.7201 17.0833 13.6117V6.38758C17.0833 4.27925 15.6391 2.91675 13.4033 2.91675H6.59663ZM13.4033 18.3334H6.59663C3.64829 18.3334 1.66663 16.4359 1.66663 13.6117V6.38758C1.66663 3.56341 3.64829 1.66675 6.59663 1.66675H13.4033C16.3516 1.66675 18.3333 3.56341 18.3333 6.38758V13.6117C18.3333 16.4359 16.3516 18.3334 13.4033 18.3334Z"
                    fill="#5E626F"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.4048 10.625H6.59485C6.24985 10.625 5.96985 10.345 5.96985 10C5.96985 9.655 6.24985 9.375 6.59485 9.375H13.4048C13.7498 9.375 14.0298 9.655 14.0298 10C14.0298 10.345 13.7498 10.625 13.4048 10.625Z"
                    fill="#5E626F"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2685 13.7484C10.1085 13.7484 9.94769 13.6876 9.82602 13.5642C9.58269 13.3192 9.58352 12.9242 9.82769 12.6809L12.5194 10.0001L9.82769 7.31925C9.58352 7.07591 9.58269 6.68091 9.82602 6.43591C10.0694 6.19091 10.4644 6.19091 10.7094 6.43425L13.846 9.55758C13.9644 9.67425 14.0302 9.83425 14.0302 10.0001C14.0302 10.1659 13.9644 10.3259 13.846 10.4426L10.7094 13.5659C10.5877 13.6876 10.4277 13.7484 10.2685 13.7484Z"
                    fill="#5E626F"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 font-notoKR text-sm mt-[60px] md:gap-4 md:mt-0">
          <div className="space-y-[10px]">
            <p>상호명</p>
            <div className="space-y-[5px] text-blue-gray/60">
              <p>하이퍼하이어</p>
              <p className="font-sans">Hyperhire India Private Limited</p>
            </div>
          </div>
          <div className="space-y-[10px]">
            <p>대표 CEO</p>
            <div className="space-y-[5px] text-blue-gray/60">
              <p>김주현</p>
              <p className="font-sans">Juhyun Kim</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-9 text-sm mt-9 md:flex-row md:mt-0">
          <div className="space-y-[10px] break-words">
            <p className="font-notoKR">사업자등록번호 CIN</p>
            <div className="space-y-[5px] text-blue-gray/60 font-sans">
              <p>427-86-01187</p>
              <p>U74110DL2016PTC290812</p>
            </div>
          </div>

          <div className="space-y-[10px]">
            <p>주소 ADDRESS</p>
            <div className="space-y-[5px] text-blue-gray/60">
              <p>서울특별시 강남대로 479, 지하 1층 238호 </p>
              <p className="font-sans">
                D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
              </p>
            </div>
          </div>
        </div>

        <p className="text-sm text-blue-gray/60 mt-9 font-sans md:mt-0">&copy; 2023 Hyperhire</p>
      </div>
    </footer>
  );
}
