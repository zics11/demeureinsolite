'use client'; // Indiquer que ce composant est un composant côté client

import { useEffect } from 'react';

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
        loadScript(
          'https://media.xmlcal.com/widget/1.00/js/bookWidget.min.js',
          () => {
            // Initialiser le widget une fois que tout est chargé
            jQuery(document).ready(function () {
              jQuery('#bookWidget-122356-233352-0-1716330485').bookWidget({
                propid: 233352,
                formAction: 'https://beds24.com/booking.php',
                widgetLang: 'fr',
                widgetType: 'BookingBox',
                borderColor: '#ffffff',
                boxShadow: false,
                backgroundColor: '#fcfcfc',
              });
            });
          }
        );
      });
    });

    // Nettoyer les scripts après démontage du composant
    return () => {
      // Supprimer les scripts chargés si nécessaire
    };
  }, []);

  return (
    <div>
      <div id='bookWidget-122356-233352-0-1716330485'></div>
    </div>
  );
}
