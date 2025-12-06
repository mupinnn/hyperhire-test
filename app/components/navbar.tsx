import { HyperhireLogoWhite } from './hyperhire-logo';
import { HamburgerMenuIcon } from './icons/hamburger-menu';

export function Navbar() {
  return (
    <nav className="flex items-center gap-2 justify-between p-4">
      <a href="#">
        <HyperhireLogoWhite />
      </a>

      <HamburgerMenuIcon className="text-white size-7" />
    </nav>
  );
}
