// src/components/layout/Navbar.tsx
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Roshe Mentorship"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-semibold">Roshe Mentorship</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/find-mentors" className="hover:text-gray-600">find mentors</Link>
            <Link href="/become-a-mentor" className="hover:text-gray-600">become a mentor</Link>
            <Link href="/community" className="hover:text-gray-600">community</Link>
            <Link href="/blog" className="hover:text-gray-600">blog</Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link 
              href="/join-roshe-mentorship" 
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
            >
              join roshe mentorship
            </Link>
            <Link 
              href="/login" 
              className="px-4 py-2 text-gray-700 hover:text-gray-900"
            >
              Log in
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/find-mentors" className="block px-3 py-2 rounded-md hover:bg-gray-100">
            find mentors
          </Link>
          <Link href="/become-a-mentor" className="block px-3 py-2 rounded-md hover:bg-gray-100">
            become a mentor
          </Link>
          <Link href="/community" className="block px-3 py-2 rounded-md hover:bg-gray-100">
            community
          </Link>
          <Link href="/blog" className="block px-3 py-2 rounded-md hover:bg-gray-100">
            blog
          </Link>
          <Link href="/join-roshe-mentorship" className="block px-3 py-2 rounded-md bg-indigo-600 text-white">
            join roshe mentorship
          </Link>
          <Link href="/login" className="block px-3 py-2 rounded-md hover:bg-gray-100">
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export {Navbar};