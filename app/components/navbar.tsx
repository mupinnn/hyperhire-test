import { HyperhireLogoWhite } from './hyperhire-logo';
import { HamburgerMenuIcon } from './icons/hamburger-menu';

export function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto w-full flex items-center gap-2 justify-between p-4 text-white font-notoKR">
      <a href="#">
        <HyperhireLogoWhite />
      </a>

      <div className="items-center gap-[60px] hidden sm:flex">
        <p>채용</p>
        <p>해외 개발자 활용 서비스</p>
      </div>

      <button className="hidden px-6 py-1.5 bg-white rounded-lg items-center justify-center text-blueberry sm:flex">
        문의하기
      </button>

      <HamburgerMenuIcon className="text-white size-7 sm:hidden" />
    </nav>
  );
}
