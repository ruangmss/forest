import forest from '../assets/images/forest.svg';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="container">
      <div className="flex bg-primary-900 rounded-2xl p-8 gap-6 justify-between text-white items-end max-lg:bg-transparent max-lg:flex-col max-lg:items-start max-lg:p-0">
        <div className="flex flex-col gap-3">
          <button
            className="max-w-max cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src={forest} alt="Logo Forest" />
          </button>
          <span>Conecte-se com a natureza</span>
        </div>

        <p>© {year} Forest. Todos os direitos reservados.</p>

        <ul className="flex gap-4 [&>li>button]:hover:text-primary-300 [&>li>button]:transition [&>li>button]:cursor-pointer flex-wrap">
          <li>
            <button>Instagram</button>
          </li>

          <li>
            <button>LinkedIn</button>
          </li>

          <li>
            <button>Facebook</button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
