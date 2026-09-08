const Button = ({ text }) => {
  return (
    <button className="py-2 px-5 rounded-full text-primary-900 bg-primary-200 border-2 border-primary-700 font-medium hover:bg-primary-300 transition cursor-pointer max-w-max">
      {text}
    </button>
  );
};

export default Button;
