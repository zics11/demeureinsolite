document.addEventListener('DOMContentLoaded', function () {
  const script = document.createElement('script');
  script.src = 'https://media.xmlcal.com/widget/1.00/js/bookWidget.min.js';
  script.async = true;
  document.head.appendChild(script);

  script.onload = function () {
    if (typeof jQuery !== 'undefined') {
      jQuery(document).ready(function ($) {
        $('#bookWidget-122356-233352-0-1716330485').bookWidget({
          propid: 233352,
          formAction: 'https://beds24.com/booking.php',
          widgetLang: 'fr',
          widgetType: 'BookingBox',
        });
      });
    } else {
      console.error('jQuery is not loaded.');
    }
  };

  script.onerror = function () {
    console.error('Failed to load the booking widget script.');
  };
});
