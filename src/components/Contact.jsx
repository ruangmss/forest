import Button from './Button';

const Contact = () => {
  const submitForm = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
  };

  return (
    <section className="flex justify-between gap-8 container max-lg:flex-col" id="contato">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-serif text-primary-300 font-semibold">Nossos Contatos</h2>
          <p className="text-white max-w-[50ch] text-balance">
            Tem interesse em fazer uma reserva na Forest? Entre em contato conosco por telefone ou
            e-mail.
          </p>
        </div>

        <ul className="flex flex-col gap-5 [&>li]:flex [&>li]:flex-col [&>li]:gap-2 [&>li>h3]:text-xl [&>li>h3]:text-primary-300 [&>li>h3]:font-serif [&>li>h3]:font-semibold [&>li>p]:text-white [&>li>a]:text-white [&>li>a]:transition [&>li>a]:hover:text-primary-300 [&>li>a]:max-w-max [&>li>a]:cursor-pointer">
          <li>
            <h3>Localização</h3>
            <p>Rua da Mata, 123 - Floresta Nacional - RJ</p>
          </li>

          <li>
            <h3>E-mail</h3>
            <a>contato@forest.com</a>
          </li>

          <li>
            <h3>Telefone</h3>
            <a>(47) 99999-9999</a>
          </li>
        </ul>
      </div>

      <form
        className="p-6 grid grid-cols-2 rounded-2xl gap-3 w-[70%] bg-primary-900 [&>label]:flex [&>label]:flex-col [&>label]:gap-1 [&>label]:text-white [&_:is(input,textarea)]:bg-primary-800 [&_:is(input,textarea)]:rounded-lg [&_:is(input,textarea)]:p-2 [&_:is(input,textarea)]:outline-none max-lg:w-full max-lg:grid-cols-1"
        onSubmit={submitForm}
      >
        <label htmlFor="name" className="col-span-full">
          Nome
          <input type="text" id="name" required />
        </label>

        <label htmlFor="email">
          E-mail
          <input type="email" id="email" required />
        </label>

        <label htmlFor="phone">
          Telefone
          <input type="text" id="phone" required />
        </label>

        <label htmlFor="message" className="col-span-full">
          Mensagem
          <textarea id="message" className="min-h-32" required />
        </label>

        <Button text={'Enviar Mensagem'} />
      </form>
    </section>
  );
};

export default Contact;
