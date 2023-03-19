import React from 'react';
import './AboutPage.css'

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="aboutContainer">
      <div className='textContainer'>
        <h2>Technologies used:</h2>
        <p>React</p>
        <p>Node.js</p>
        <p>Javascript</p>
        <p>SQL</p>
        <p>HTML</p>
        <p>CSS</p>
      </div>
    </div>
  );
}

export default AboutPage;
