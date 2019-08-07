import React from 'react';
import './Main.css';

import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';

export default function Main({ match }) {
  return (
    <div className="main-container">
      <img src={logo} alt="Tindev"/>
      <ul>
        <li>
          <img src="https://avatars3.githubusercontent.com/u/48891399?v=4" alt=""/>
          <footer>
            <strong>Adriano Souza</strong>
            <p>Researcher Collaborator at IFSP\r\nPassionate by Python, Django, Javascript, ReactJS, React Native, NodeJS and everything that involves those technologies</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike"/>
            </button>
            <button type="button">
              <img src={like} alt="Like"/>
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars3.githubusercontent.com/u/48891399?v=4" alt=""/>
          <footer>
            <strong>Adriano Souza</strong>
            <p>Researcher Collaborator at IFSP\r\nPassionate by Python, Django, Javascript, ReactJS, React Native, NodeJS and everything that involves those technologies</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike"/>
            </button>
            <button type="button">
              <img src={like} alt="Like"/>
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars3.githubusercontent.com/u/48891399?v=4" alt=""/>
          <footer>
            <strong>Adriano Souza</strong>
            <p>Researcher Collaborator at IFSP\r\nPassionate by Python, Django, Javascript, ReactJS, React Native, NodeJS and everything that involves those technologies</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike"/>
            </button>
            <button type="button">
              <img src={like} alt="Like"/>
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars3.githubusercontent.com/u/48891399?v=4" alt=""/>
          <footer>
            <strong>Adriano Souza</strong>
            <p>Researcher Collaborator at IFSP\r\nPassionate by Python, Django, Javascript, ReactJS, React Native, NodeJS and everything that involves those technologies</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike"/>
            </button>
            <button type="button">
              <img src={like} alt="Like"/>
            </button>
          </div>
        </li>
      </ul>
    </div>
  )
}