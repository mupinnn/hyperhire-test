import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HyperhireLogoWhite } from './hyperhire-logo';
import { HamburgerMenuIcon } from './icons/hamburger-menu';
import { CaretDownIcon } from './icons/caret-down';

export function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto w-full flex items-center gap-2 justify-between p-4 text-white font-notoKR">
      <a href="#">
        <HyperhireLogoWhite />
      </a>

      <div className="items-center gap-[60px] hidden sm:flex">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="flex items-center gap-2">
            <span>채용</span>
            <CaretDownIcon />
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className="bg-white border border-gray/100 rounded-lg font-notoKR" sideOffset={16}>
              <DropdownMenu.Label className="px-4 py-2.5">채용</DropdownMenu.Label>
              {['해외 개발자 원격 채용', '외국인 원격 채용 (비개발 직군)', '한국어 가능 외국인 채용'].map((m) => (
                <DropdownMenu.Item key={m} className="px-4 py-2.5 text-gray/700">
                  {m}
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>

        <p>해외 개발자 활용 서비스</p>
      </div>

      <button className="hidden px-6 py-1.5 bg-white rounded-lg items-center justify-center text-blueberry sm:flex">
        문의하기
      </button>

      <HamburgerMenuIcon className="text-white size-7 sm:hidden" />
    </nav>
  );
}
