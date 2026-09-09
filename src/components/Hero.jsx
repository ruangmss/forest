import Button from './Button';

const Hero = () => {
  const year = new Date().getFullYear();

  return (
    <section className="container pt-0">
      <div className="pt-36 bg-linear-to-t from-black/55 to-transparent rounded-b-xl flex flex-col gap-14 justify-end p-8 max-md:gap-8 max-md:p-6 max-md:pt-20">
        <div className="flex flex-col gap-6">
          <Button text={'Reservar Hoje'} />

          <h2 className="font-serif text-balance max-w-[15ch] text-5xl text-white font-semibold max-md:text-4xl max-sm:text-2xl">
            Venha Experimmentar a Vida na Floresta
          </h2>
        </div>

        <div className="flex justify-between gap-7 max-md:flex-col max-md:gap-2">
          <span className="text-white">Entre os melhores locais para visitar em {year}</span>

          <span className="text-white">Recomendado por Caravan | Revista Nacional</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
