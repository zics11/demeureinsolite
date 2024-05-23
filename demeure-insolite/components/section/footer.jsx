import * as React from 'react';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <section className=' flex h-28 w-full flex-row items-center justify-center gap-3'>
      <FontAwesomeIcon icon={faEnvelope} className=' w-4' /> <p>demeureinsolite@gmail.com</p>
      <p>/</p>
      <FontAwesomeIcon icon={faPhone} className=' w-4' /> <p>+33 7 67 63 19 52</p>
    </section>
  );
}
