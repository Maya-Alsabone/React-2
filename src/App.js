import React from 'react';
import './App.css'; // Importing the CSS file

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.</p>
    </>
  );
}


export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage />
      <img className="avatar" src="https://static-00.iconduck.com/assets.00/user-avatar-icon-2048x2048-wpp8os2d.png" alt="Avatar" />
    </div>
  );
}
