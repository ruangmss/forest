import house1 from '../assets/images/house-1.jpg';
import house2 from '../assets/images/house-2.jpg';
import house3 from '../assets/images/house-3.jpg';
import defaultImage from '../assets/images/default.svg';

const Refuge = () => {
  return (
    <section className="container grid grid-cols-5 gap-6 max-md:grid-cols-1">
      <div
        className="col-span-2 flex flex-col gap-6 bg-contain bg-center bg-no-repeat h-full justify-end max-md:col-span-1"
        style={{ backgroundImage: `url(${defaultImage})` }}
      >
        <h2 className="font-serif text-balance text-5xl text-white font-semibold max-md:text-4xl">
          Refúgio Natural
        </h2>

        <ul
          className="flex flex-col gap-4
          *:flex
          *:items-center
          *:gap-3
          *:text-lg
          *:text-white/90
          *:before:h-1
          *:before:w-4
          *:before:bg-primary-200
          col-span-1"
        >
          <li>Experimente a natureza de perto</li>

          <li>Conecte-se com a natureza</li>

          <li>Desconecte-se do digital</li>

          <li>Observe a vida selvagem</li>

          <li>Escolha a sua cabine preferida</li>
        </ul>
      </div>

      <div className="col-span-3 grid grid-cols-3 gap-6 [&_img]:w-full [&_img]:object-cover [&_img]:rounded-2xl max-md:col-span-1 max-md:grid-cols-2">
        <div className="col-span-full relative">
          <img src={house1} alt="Imagem da cabine Ruby" className="h-52" />
          <span className="text-white text-sm p-2 rounded-full bg-black/30 absolute top-2 right-2 max-w-max">
            RUBY
          </span>
        </div>

        <div className="col-span-2 relative max-md:col-span-1">
          <img src={house2} alt="Imagem da cabine Emerald" />
          <span className="text-white text-sm p-2 rounded-full bg-black/30 absolute top-2 right-2 max-w-max">
            EMERALD
          </span>
        </div>

        <div className="relative">
          <img src={house3} alt="Imagem da cabine Saphire" className="h-full" />
          <span className="text-white text-sm p-2 rounded-full bg-black/30 absolute top-2 right-2 max-w-max">
            SAPHIRE
          </span>
        </div>
      </div>
    </section>
  );
};

export default Refuge;
