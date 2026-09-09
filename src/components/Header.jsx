import logo from '../assets/images/forest.svg';
import menu from '../assets/images/menu.svg';

const Header = ({ mobile, menuOpen, setMenuOpen }) => {
  return (
    <header className="container items-center z-50 flex justify-between gap-6">
      <img src={logo} alt="Logo Forest" className="block max-w-full min-w-0" />

      {!mobile && (
        <nav>
          <ul className="flex *:*:px-3 *:*:py-2 *:*:text-lg *:*:text-white *:*:transition *:*:rounded-lg *:*:hover:bg-primary-900">
            <li>
              <a href="#cabines">Cabines</a>
            </li>

            <li>
              <a href="#reservas">Reservas</a>
            </li>

            <li>
              <a href="#aventuras">Aventuras</a>
            </li>

            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      )}

      {mobile && (
        <button
          className="rounded-full py-1 px-5 text-primary-900 bg-primary-200 border-2 border-primary-700 font-medium flex gap-3 items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>Menu</span>
          <img src={menu} className="size-4" />
        </button>
      )}

      {mobile && menuOpen && (
        <nav
          className="container fixed inset-0 z-50 flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          <ul
            className="w-full animate-menu
                  border-y border-white/30 divide-y divide-white/30
                   [&_li]:w-full [&_a]:block [&_a]:w-full [&_a]:py-5
                   [&_a]:text-center [&_a]:text-lg [&_a]:uppercase
                   [&_a]:tracking-widest [&_a]:text-white [&_a]:transition
                   [&_a:hover]:bg-primary-900"
          >
            <li>
              <a href="#cabines">Cabines</a>
            </li>

            <li>
              <a href="#reservas">Reservas</a>
            </li>

            <li>
              <a href="#aventuras">Aventuras</a>
            </li>

            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
