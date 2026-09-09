import canoeing from '../assets/images/canoeing.jpg';
import wildlife from '../assets/images/wildlife.jpg';
import observation from '../assets/images/observation.jpg';

const Adventure = () => {
  return (
    <section className="flex flex-col gap-6 container" id="aventuras">
      <h2 className="font-serif text-balance text-5xl text-white font-semibold text-center max-md:text-4xl">
        Escolha sua Próxima Aventura
      </h2>

      <div className="grid grid-cols-3 gap-6 max-md:gap-4 max-[560px]:grid-cols-1">
        <div className="group relative aspect-square overflow-hidden rounded-2xl">
          <img
            src={canoeing}
            alt="Imagem de canoagem"
            className="h-full w-full object-cover transition group-hover:scale-105"
          />
          <div className="absolute inset-0 transition group-hover:bg-linear-to-t group-hover:from-primary-900/50 group-hover:to-transparent"></div>
          <span className="absolute bottom-4 right-4 opacity-0 transition group-hover:opacity-100 text-white font-semibold">
            Canoagem
          </span>
        </div>

        <div className="group relative aspect-square overflow-hidden rounded-2xl">
          <img
            src={observation}
            alt="Imagem de obeservação noturna"
            className="h-full w-full object-cover transition group-hover:scale-105"
          />
          <div className="absolute inset-0 transition group-hover:bg-linear-to-t group-hover:from-primary-900/50 group-hover:to-transparent"></div>
          <span className="absolute bottom-4 right-4 opacity-0 transition group-hover:opacity-100 text-white font-semibold">
            Observação Noturna
          </span>
        </div>

        <div className="group relative aspect-square overflow-hidden rounded-2xl">
          <img
            src={wildlife}
            alt="Imagem de vida selvagem"
            className="h-full w-full object-cover transition group-hover:scale-105"
          />
          <div className="absolute inset-0 transition group-hover:bg-linear-to-t group-hover:from-primary-900/50 group-hover:to-transparent"></div>
          <span className="absolute bottom-4 right-4 opacity-0 transition group-hover:opacity-100 text-white font-semibold">
            Vida Selvagem
          </span>
        </div>
      </div>
    </section>
  );
};

export default Adventure;
