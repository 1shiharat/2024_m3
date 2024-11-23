import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import Modal from './components/Modal';
import CommandBar from './components/CommandBar';

const themes = {
  simple: {
    name: 'シンプル',
    mapBg: '#FFFFFF',
    spotColor: '#1E90FF',
    modalGradient: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7))'
  },
  dark: {
    name: 'ダーク',
    mapBg: '#1A1A2E',
    spotColor: '#4F9DA6',
    modalGradient: 'linear-gradient(to bottom, transparent, rgba(26, 26, 46, 0.95))'
  },
  orange: {
    name: 'オレンジ',
    mapBg: '#FFE4C4',
    spotColor: '#FF4500',
    modalGradient: 'linear-gradient(to bottom, transparent, rgba(139, 69, 19, 0.8))'
  }
};

function App() {
  const EVENT_ID = '1';
  const [currentTheme, setCurrentTheme] = useState('simple');
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [showCommandBar, setShowCommandBar] = useState(false);

  useEffect(() => {
    const savedTheme = sessionStorage.getItem('theme');
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }

    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey) {
        if (e.key === 'ArrowLeft') {
          switchTheme('prev');
        } else if (e.key === 'ArrowRight') {
          switchTheme('next');
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const switchTheme = (direction) => {
    const themeKeys = Object.keys(themes);
    const currentIndex = themeKeys.indexOf(currentTheme);
    let newIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % themeKeys.length;
    } else {
      newIndex = (currentIndex - 1 + themeKeys.length) % themeKeys.length;
    }

    setCurrentTheme(themeKeys[newIndex]);
    sessionStorage.setItem('theme', themeKeys[newIndex]);
  };

  return (
    <div className="app" style={{ width: '1024px', height: '768px' }}>
      <Map 
        theme={themes[currentTheme]} 
        onSpotClick={setSelectedSpot} 
        eventId={EVENT_ID}
      />
      {selectedSpot && (
        <Modal 
          spot={selectedSpot} 
          theme={themes[currentTheme]}
          onClose={() => setSelectedSpot(null)} 
        />
      )}
      <button 
        className="settings-button"
        onClick={() => setShowCommandBar(!showCommandBar)}
      >
        ⚙️
      </button>
      {showCommandBar && (
        <CommandBar 
          currentTheme={themes[currentTheme]}
          onThemeSwitch={switchTheme}
        />
      )}
    </div>
  );
}

export default App;
