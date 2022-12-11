import React from 'react';
import './styles.css';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>My Personal Portfolio</h1>
        <nav>
          <ul>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <p>Welcome to my personal portfolio website!</p>
        <p>Here, you can learn more about the services I offer, view my past projects, and get in touch with me.</p>
      </main>
    </div>
  );
};

export default App;
