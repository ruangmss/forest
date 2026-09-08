import Button from './Button';

const Reservations = () => {
  const month = new Date().toLocaleDateString('pt-BR', {
    month: 'long',
  });

  const numericMonth = new Date().toLocaleDateString('pt-BR', {
    month: '2-digit',
  });

  const day = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
  });

  const year = new Date().getFullYear();

  return (
    <section className="bg-primary-900">
      <div className="flex flex-col gap-6 container">
        <span className="text-primary-200 tracking-wide text-center">
          CONECTE-SE COM A NATUREZA
        </span>
        <h2 className="font-serif text-balance text-5xl text-white font-semibold text-center max-md:text-4xl">
          Cada Som, Cada Momento, Uma Nova Descoberta
        </h2>

        <ul className="grid grid-cols-3 gap-6 *:bg-primary-800 *:rounded-2xl *:flex *:flex-col *:gap-4 *:p-6 *:justify-center max-md:grid-cols-1">
          <li>
            <h3 className="text-xl text-primary-300 font-serif font-semibold">Lua Nova</h3>

            <div className="flex flex-col text-white *:text-xl *:first-of-type:text-4xl *:first-of-type:font-serif">
              <span>{day}</span>
              <span>
                {month} {year + 1}
              </span>
            </div>

            <p className="text-white max-w-[40ch]">
              Melhor período para observação astronômica. O Céu estará claro e as estrelas visíveis.
            </p>

            <Button text={`Reservar ${day}/${numericMonth}`} />
          </li>

          <li>
            <h3 className="text-xl text-primary-300 font-serif font-semibold">Aurora Boreal</h3>

            <div className="flex flex-col text-white *:text-xl *:first-of-type:text-4xl *:first-of-type:font-serif">
              <span>{day}</span>
              <span>
                {month} {year + 1}
              </span>
            </div>

            <p className="text-white max-w-[40ch]">
              Melhor período para observação da Aurora Boreal, o céu estará iluminado pelas
              estrelas.
            </p>

            <Button text={`Reservar ${day}/${numericMonth}`} />
          </li>

          <li>
            <h3 className="text-xl text-primary-300 font-serif font-semibold">Chuva de Meteoros</h3>

            <div className="flex flex-col text-white *:text-xl *:first-of-type:text-4xl *:first-of-type:font-serif">
              <span>{day}</span>
              <span>
                {month} {year + 1}
              </span>
            </div>

            <p className="text-white max-w-[40ch]">
              Melhor período para observação astronômica. O Céu estará claro e as estrelas visíveis.
            </p>

            <Button text={`Reservar ${day}/${numericMonth}`} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Reservations;
