import forest from '../assets/images/forest.svg';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="container">
      <div className="flex bg-primary-900 rounded-2xl p-8 gap-6 justify-between text-white items-end max-lg:bg-transparent max-lg:flex-col max-lg:items-start max-lg:py-0">
        <div className="flex flex-col gap-3">
          <a className="max-w-max cursor-pointer">
            <img src={forest} alt="Logo Forest" />
          </a>
          <span>Conecte-se com a natureza</span>
        </div>

        <p>{year} Forest. Todos os direitos reservados.</p>

        <ul className="flex gap-4 [&>li>a]:hover:text-primary-300 [&>li>a]:transition [&>li>a]:cursor-pointer flex-wrap">
          <li>
            <a>Instagram</a>
          </li>

          <li>
            <a>LinkedIn</a>
          </li>

          <li>
            <a>Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
