import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

function CommandBar({ currentTheme, onThemeSwitch }) {
  return (
    <div className="command-bar">
      <ThemeSwitcher 
        currentTheme={currentTheme}
        onThemeSwitch={onThemeSwitch}
      />
    </div>
  );
}

export default CommandBar; 