'use client'; // Indiquer que ce composant est un composant côté client

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { useEffect } from 'react';

export default function Home() {
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
                borderColor:'#ffffff',
                boxShadow:false,
                backgroundColor:'#fcfcfc',

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
    <main className='flex flex-col items-center'>
      <Image
        src='/DI_logo.svg'
        width={500}
        height={500}
        className='mt-16'
        alt='Logo'
      />
      <h1 className='text-3xl font-bold'>
        Hébergements atypiques et expériences authentiques dans le Sud de la
        France.
      </h1>
      <section className='mt-14  w-full bg-accent pb-10 pt-10 flex justify-center '>
        <Card className='w-11/12'>
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div id='bookWidget-122356-233352-0-1716330485'></div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
