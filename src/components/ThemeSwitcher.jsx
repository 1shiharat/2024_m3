import React from 'react';

function ThemeSwitcher({ currentTheme, onThemeSwitch }) {
  return (
    <div className="theme-switcher">
      <button onClick={() => onThemeSwitch('prev')}>←</button>
      <span>{currentTheme.name}</span>
      <button onClick={() => onThemeSwitch('next')}>→</button>
    </div>
  );
}

export default ThemeSwitcher; 