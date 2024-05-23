import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { cn } from '@/lib/utils';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>
          Hébergements Insolites en Occitanie - Villas, Cabane, Tipi et Plus |
          Demeure Insolite
        </title>
        <meta
          name='description'
          content='Découvrez nos hébergements insolites en Occitanie : villas, cabanes, tipis, et plus. Profitez du soleil, des plages, des sports nautiques et de la gastronomie locale dans un cadre authentique et naturel. Réservez dès maintenant !'
        />
        <meta
          name='keywords'
          content='hébergements insolites, Occitanie, villas, cabanes, tipis, nature, tourisme de luxe, vacances en famille, vacances en couple, tourisme authentique, sud de la France'
        />
        <meta name='robots' content='index, follow' />
        <meta
          property='og:title'
          content='Hébergements Insolites en Occitanie - Demeure Insolite'
        />
        <meta
          property='og:description'
          content="Profitez d'un séjour unique en Occitanie avec nos hébergements insolites : villas, cabanes, tipis, et plus. Découvrez la nature, les plages, et la gastronomie locale."
        />
        <meta property='og:image' content='URL_DE_VOTRE_IMAGE' />
        <meta property='og:url' content='https://www.demeureinsolite.fr' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Hébergements Insolites en Occitanie - Demeure Insolite'
        />
        <meta
          name='twitter:description'
          content='Séjour unique en Occitanie avec nos hébergements insolites : villas, cabanes, tipis, et plus. Profitez de la nature et de la gastronomie locale.'
        />
        <meta name='twitter:image' content='URL_DE_VOTRE_IMAGE' />
        <link rel='canonical' href='https://www.demeureinsolite.fr' />{' '}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <Script id='google-analytics'>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
