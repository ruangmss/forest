import morningIcon from '../assets/images/morning.svg';
import dayIcon from '../assets/images/day.svg';
import nightIcon from '../assets/images/night.svg';
import defaultImage from '../assets/images/default.svg';

const Rhythm = () => {
  return (
    <section
      className="container flex flex-col gap-6 bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${defaultImage})` }}
    >
      <span className="text-primary-200 tracking-wide text-center block">CICLO NATURAL</span>

      <h2 className="font-serif text-balance text-5xl text-white font-semibold text-center max-md:text-4xl">
        Ritmo da Floresta
      </h2>

      <ol
        className="flex gap-6 *:bg-primary-900 *:p-6 *:rounded-2xl *:flex
       *:flex-col *:gap-5 *:transition *:duration-200 *:hover:-translate-y-2 max-md:flex-col"
      >
        <li>
          <div className="rounded-full p-2 bg-primary-300 border-2 border-primary-700 max-w-max">
            <img src={morningIcon} />
          </div>

          <h3 className="text-xl text-white font-serif font-semibold">Amanhecer</h3>

          <p className="text-white/90 max-w-[45ch]">
            Desperte com o canto dos pássaros e participe das nossas caminhadas ao ar livre.
          </p>

          <span className="text-primary-300">05:40 - 07:00</span>
        </li>

        <li className="translate-y-5 max-md:translate-y-0">
          <div className="rounded-full p-2 bg-primary-300 border-2 border-primary-700 max-w-max">
            <img src={dayIcon} />
          </div>

          <h3 className="text-xl text-white font-serif font-semibold">Meio-dia</h3>

          <p className="text-white/90 max-w-[45ch]">
            Explore nossas trilhas sombreadas e desfrute de um piquenique gourmet na natureza.
          </p>

          <span className="text-primary-300">12:00 - 14:00</span>
        </li>

        <li>
          <div className="rounded-full p-2 bg-primary-300 border-2 border-primary-700 max-w-max">
            <img src={nightIcon} />
          </div>

          <h3 className="text-xl text-white font-serif font-semibold">Anoitecer</h3>

          <p className="text-white/90 max-w-[45ch]">
            Termine seu dia com nossa sessão de observação de estrelas.
          </p>

          <span className="text-primary-300">19:00 - 21:00</span>
        </li>
      </ol>
    </section>
  );
};

export default Rhythm;
