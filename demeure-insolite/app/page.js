import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';

export default function Home() {
  

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
