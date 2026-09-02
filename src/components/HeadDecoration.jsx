const HeadDecoration = () => {
  return (
    <div className="container">
      <div className="flex gap-1 text-primary-300 [&>*:not(:first-child)]:bg-primary-900 [&>*:not(:first-child)]:px-5 [&>*:not(:first-child)]:py-2 [&>*:not(:first-child)]:rounded-lg relative">
        <span className="size-2 block rounded-full bg-primary-300 absolute top-4 -left-1"></span>

        <span>Segunda</span>
        <span>25º</span>
        <span>🌤️</span>
      </div>
    </div>
  );
};

export default HeadDecoration;
