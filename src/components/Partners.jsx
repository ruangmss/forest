import caravan from '../assets/partners/caravan.svg';
import dogs from '../assets/partners/dogs.svg';
import lescone from '../assets/partners/lescone.svg';
import surfbot from '../assets/partners/surfbot.svg';
import wildbeast from '../assets/partners/wildbeast.svg';

const Partners = () => {
  return (
    <section className="container">
      <div className="flex items-center p-6 justify-center gap-8 border-y-2 border-primary-900 [&>img]:min-w-0 max-md:flex-col max-md:border-0">
        <img src={caravan} alt="Logo Caravan" />
        <img src={dogs} alt="Logo Dogs" />
        <img src={lescone} alt="Logo Lescone" />
        <img src={surfbot} alt="Logo Surfbot" />
        <img src={wildbeast} alt="Logo Wildbeast" />
      </div>
    </section>
  );
};

export default Partners;
