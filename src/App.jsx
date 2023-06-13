import React from 'react';
import './App.css';

const App = () => {
  const handleImageClick = (event) => {
    const imgElement = event.target;
    if (imgElement.requestFullscreen) {
      imgElement.requestFullscreen();
    } else if (imgElement.mozRequestFullScreen) {
      imgElement.mozRequestFullScreen();
    } else if (imgElement.webkitRequestFullscreen) {
      imgElement.webkitRequestFullscreen();
    } else if (imgElement.msRequestFullscreen) {
      imgElement.msRequestFullscreen();
    }
  };

  return (
    <div className='App'>
      <img
        src='/Service List 6-8-2023.jpg'
        alt='serviceMenu'
        onClick={handleImageClick}
      />
    </div>
  );
};

export default App;
