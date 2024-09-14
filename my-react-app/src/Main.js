import React from 'react';
import image1 from './image1.jpg';

function Main() {
  return (
    <main className="main">
      <section className="headings">
        <h1 id="main-heading">The Little Lemon</h1>
        <h2 id="sub-heading">Chicago</h2>
        <p id="paragraph1">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      </section>
      <section className="image-stuff">
        <img src={image1} height={450} width={350} alt="logo" />
      </section>
    </main>
  );
}

export default Main;
