'use client'; // Indiquer que ce composant est un composant côté client

import { useEffect } from 'react';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Reservation() {
  useEffect(() => {
    const loadScript = (src, callback) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = callback;
      document.head.appendChild(script);
    };

    // Charger jQuery et jQueryUI
    loadScript('https://code.jquery.com/jquery-3.6.0.min.js', () => {
      loadScript('https://code.jquery.com/ui/1.12.1/jquery-ui.min.js', () => {
        // Charger le widget
        loadScript('/bookWidget.min.js', () => {
          // Initialiser le widget une fois que tout est chargé
          jQuery(document).ready(function () {
            jQuery('#bookWidget-122356-0-0-1716470854').bookWidget({
              ownerid: 122356,
              borderColor: '#ffffff',
              boxShadow: false,
              buttonBackgroundColor: '#88743a',
              dateFormat: 'MM d, yy',
              dateSelection: 1,
              defaultNumAdult: 2,
              defaultNumNight: 7,
              formAction: 'https://beds24.com/booking.php',
              fontSize: '14px',
              peopleSelection: 1,
              showLabels: true,
              weekFirstDay: 1,
              widgetLang: 'fr',
              widgetType: 'BookingStrip',
            });
          });
        });
      });
    });

    // Nettoyer les scripts après démontage du composant
    return () => {
      // Supprimer les scripts chargés si nécessaire
    };
  }, []);

  return (
    <div className=' my-32 pb-10 w-1/2  bg-card'>
      <h2 className=' pb-4 pt-14 text-center font-medium text-primary'>
        <FontAwesomeIcon icon={faBed} className=' mr-2 h-4' />
        RÉSERVEZ VOTRE SÉJOUR
      </h2>
      <div id='bookWidget-122356-0-0-1716470854'> </div>
    </div>
  );
}
