import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

function SignInSignUpFooter() {
  const router = useRouter();

  return (
    <div className='flex flex-wrap justify-between items-center'>
      <div className='flex w-64 justify-between'>
        <Link href='/contact'>
          <p className='text-white'>CONTACT US</p>
        </Link>
        <Link href='/about'>
          <p className='text-white'>ABOUT US</p>
        </Link>
        <Link href='/faq'>
          <p className='text-white'>FAQ</p>
        </Link>
      </div>
      <div className='cursor-pointer'>
        <p className='text-white' onClick={() => router.push('/')}>
          &copy; {new Date().getFullYear()} 8doors
        </p>
      </div>
    </div>
  );
}

export default SignInSignUpFooter;
