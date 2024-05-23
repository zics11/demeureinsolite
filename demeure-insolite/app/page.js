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

export default function Home() {
  return (
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
      <section className="mt-14  flex w-full justify-center bg-paysage bg-[url('/paysage-durban.jpeg')] bg-cover bg-center pb-10 pt-10 mb-36">
            <Reservation></Reservation>
      </section>
      <Footer></Footer>
    </main>
  );
}
