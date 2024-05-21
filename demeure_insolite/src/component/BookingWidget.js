import React, { useEffect } from 'react';

const BookingWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://media.xmlcal.com/widget/1.00/js/bookWidget.min.js';
    script.async = true;
    script.onload = () => {
      if (window.jQuery) {
        window.jQuery(document).ready(() => {
          window.jQuery('#bookWidget-122356-233352-0-1716242428').bookWidget({
            propid: 233352,
            formAction: 'https://beds24.com/booking.php',
            widgetLang: 'fr',
            widgetType: 'BookingBox',
          });
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return <div id="bookWidget-122356-233352-0-1716242428"></div>;
};

export default BookingWidget;
