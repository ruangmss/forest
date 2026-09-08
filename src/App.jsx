import React from 'react';
import HeadDecoration from './components/HeadDecoration';
import Header from './components/Header';
import useMedia from './hooks/useMedia';
import Hero from './components/Hero';

const App = () => {
  const mobile = useMedia('(max-width: 768px)');
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className={menuOpen && mobile ? 'h-screen overflow-y-hidden' : ''}>
      {menuOpen && mobile && (
        <div className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm"></div>
      )}

      <HeadDecoration />
      <Header mobile={mobile} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
    </div>
  );
};

export default App;
