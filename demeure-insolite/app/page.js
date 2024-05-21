import Image from 'next/image';

export default function Home() {
  return (
    <main className=' flex items-center flex-col'>
      <Image src='./DI_logo.svg' width={500} height={500} className=' mt-28'/>
      <h1 className=' text-3xl font-bold'>Hébergements atypiques et expériences authentiques dans le Sud de la France.</h1>
    </main>
  );
}
