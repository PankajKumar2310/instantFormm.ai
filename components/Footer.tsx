import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="w-full border-t py-8 mt-16 bg-white text-gray-700">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo & Tagline */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">InstantForm.ai</h2>
          <p className="text-sm text-gray-500">Build AI-Driven Forms Effortlessly</p>
        </div>

        {/* Links */}
        <div className="flex gap-6 flex-wrap justify-center text-sm">
          <Link href="/features" className="hover:underline hover:text-blue-600 transition">
            Features
          </Link>
          <Link href="/pricing" className="hover:underline hover:text-blue-600 transition">
            Pricing
          </Link>
          <Link href="/docs" className="hover:underline hover:text-blue-600 transition">
            Documentation
          </Link>
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-600 transition"
          >
            GitHub
          </a>
        </div>

        {/* Socials (optional) */}
        {/* <div className="flex gap-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/twitter.svg" alt="Twitter" width={20} height={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
          </a>
        </div> */}
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-400 mt-6">
        © {new Date().getFullYear()} InstantForm.ai — All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
