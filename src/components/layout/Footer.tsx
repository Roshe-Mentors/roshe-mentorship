// src/components/layout/Footer.tsx
import React from 'react';

const Footer = () => {
  const socialLinks = [
    { href: 'https://linkedin.com', icon: 'linkedin', label: 'LinkedIn' },
    { href: 'https://instagram.com', icon: 'instagram', label: 'Instagram' },
    { href: 'https://twitter.com', icon: 'twitter', label: 'Twitter' },
    { href: 'https://facebook.com', icon: 'facebook', label: 'Facebook' },
    { href: 'https://youtube.com', icon: 'youtube', label: 'YouTube' },
    { href: 'https://tiktok.com', icon: 'tiktok', label: 'TikTok' },
  ];

  return (
    <footer className="bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Roshe Mentorship"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-semibold">Roshe Mentorship</span>
            </div>
            <p className="mt-2 text-sm text-gray-600 max-w-md text-center md:text-left">
              To inspire powerful conversation and collaborations among members worldwide 
              so together we can change the world with creativity.
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.icon}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <span className="sr-only">{link.label}</span>
                <i className={`fab fa-${link.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-8">
              <Link href="/find-mentors" className="text-sm text-gray-600 hover:text-gray-900">
                find mentors
              </Link>
              <Link href="/become-a-mentor" className="text-sm text-gray-600 hover:text-gray-900">
                become a mentor
              </Link>
              <Link href="/community" className="text-sm text-gray-600 hover:text-gray-900">
                community
              </Link>
              <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">
                blog
              </Link>
            </div>
            <p className="text-sm text-gray-600">
              © Roshe Mentorship, all rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export {Footer };