import React from 'react';

const HeadDecoration = () => {
  const today = new Date().toLocaleDateString('pt-BR', { weekday: 'long' }).replace('-feira', '');
  const formattedToday = today.charAt(0).toUpperCase() + today.slice(1);

  const weathers = [
    { temperature: 28, emoji: '☀️' },
    { temperature: 22, emoji: '🌤️' },
    { temperature: 19, emoji: '🌧️' },
    { temperature: 25, emoji: '⛅' },
    { temperature: 31, emoji: '☀️' },
    { temperature: 24, emoji: '🌤️' },
    { temperature: 16, emoji: '🌧️' },
    { temperature: 26, emoji: '⛅' },
  ];

  const [weather] = React.useState(() => {
    return weathers[Math.floor(Math.random() * weathers.length)];
  });

  return (
    <div className="container pb-0">
      <div className="flex gap-1 text-primary-300 [&>*:not(:first-child)]:bg-primary-900 [&>*:not(:first-child)]:px-5 [&>*:not(:first-child)]:py-2 [&>*:not(:first-child)]:rounded-lg relative">
        <span className="size-2 block rounded-full bg-primary-300 absolute top-4 -left-1"></span>

        <span>{formattedToday}</span>
        <span>{weather.temperature}º</span>
        <span>{weather.emoji}</span>
      </div>
    </div>
  );
};

export default HeadDecoration;
