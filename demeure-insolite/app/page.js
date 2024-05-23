import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import Reservation from '../components/beds24/reservation';
import Footer from '../components/section/footer';
import { NextSeo } from 'next-seo';


export default function Home() {
  return (
    <>
      {/* <NextSeo
        title='Accueil - Demeure Insolite'
        description="Page d'accueil de Demeure Insolite. Découvrez nos hébergements uniques en Occitanie."
      /> */}
      <main className='flex flex-col items-center '>
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
        <section className="bg-paysage  mb-36 mt-14 flex w-full justify-center bg-[url('/paysage-durban.jpeg')] bg-cover bg-center pb-10 pt-10">
          <Reservation></Reservation>
        </section>
        <Footer></Footer>
      </main>
    </>
  );
}
