import React from 'react';
import BookingWidget from './component/BookingWidget';
import dilogo from './assets/demeureinsolite_logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <div>
        <img src={dilogo} className="logo" alt="Demeure Insolite logo" />
      </div>
      <h1>Bienvenue sur le site officiel de Demeure insolite</h1>
      <div className="card">
        <BookingWidget />
        <button>
          Réserver
        </button>
        <p>
          Bientôt vous pourrez réserver nos logements à Gruissan ou dans les Corbières directement depuis le site sans intermédiaire et au meilleur prix.
        </p>
      </div>
      <p className="read-the-docs">
        demeureinsolite@gmail.com
      </p>
    </>
  );
};

export default App;
