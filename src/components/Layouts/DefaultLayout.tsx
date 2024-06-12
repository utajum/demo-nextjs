'use client';
import React, { useState, Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import risklickLogo from './risklick-logo.png';
import {
  DifferencesPdfDialog,
  ImageFromEmailDialog,
  ReadmeDialog,
} from './Modals';

interface SidebarProps {
  setDialogOpen: Dispatch<SetStateAction<boolean>>;
  setImageDialogOpen: Dispatch<SetStateAction<boolean>>;
  setDifferencesPdfDialogOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({
  setDialogOpen,
  setImageDialogOpen,
  setDifferencesPdfDialogOpen,
}: SidebarProps) => (
  <div
    className={`left-0 top-0 z-9999 flex h-screen w-32.5 flex-col overflow-y-hidden border-r border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark lg:static lg:translate-x-0 translate-x-0 duration-300 ease-linear`}>
    <ul className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear p-4">
      <li>
        <a
          href="https://vladdimir.dev/"
          target="_blank"
          rel="noopener noreferrer">
          Home
        </a>
      </li>
      <li>
        <a
          href="https://vladdimir.dev/"
          target="_blank"
          rel="noopener noreferrer">
          About
        </a>
      </li>
      <li>
        <a
          href="http://elevatech.xyz/"
          target="_blank"
          rel="noopener noreferrer">
          Services
        </a>
      </li>
      <li>
        <a
          href="http://elevatech.xyz/"
          target="_blank"
          rel="noopener noreferrer">
          Contact
        </a>
      </li>
      <li>
        <a
          href="http://elevatech.xyz/"
          target="_blank"
          rel="noopener noreferrer">
          Blog
        </a>
      </li>
      <li>
        <button
          onClick={() => setDialogOpen(true)}
          className="font-bold text-uppercase">
          README
        </button>
      </li>
      <li>
        <button
          onClick={() => setImageDialogOpen(true)}
          className="font-bold text-uppercase">
          Email IMG
        </button>
      </li>
      <li>
        <button
          onClick={() => setDifferencesPdfDialogOpen(true)}
          className="font-bold text-uppercase">
          Differences
        </button>
      </li>
    </ul>

    <div className="absolute bottom-0 mb-4 ml-4">
      <a
        href="https://www.risklick.ch/"
        target="_blank"
        rel="noopener noreferrer">
        <Image src={risklickLogo} alt="Risklick Logo" width={100} />
      </a>
    </div>
  </div>
);

const Header = () => (
  <header className="sticky top-0 z-999 flex w-full border-b border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark">
    <div className="flex flex-grow items-center justify-between px-4 py-5 shadow-2 md:px-5 2xl:px-10">
      <div className="flex items-center justify-between gap-2 sm:gap-4 w-full">
        <a
          href="https://vladdimir.dev/"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            src="https://i.imgur.com/nAQnG8U.jpeg"
            alt="Vladimir's Avatar"
            width={50}
            height={50}
            className="rounded-full mr-2"
          />
        </a>
        <a
          href="https://vladdimir.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-bold">
          Vladimirs Demo project for Risklick Technology
        </a>

        <a
          href="https://www.risklick.ch/"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            src={risklickLogo}
            alt="Risklick Logo"
            width={100}
            className="ml-auto"
          />
        </a>
      </div>
    </div>
  </header>
);

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const [differencesPdfDialogOpen, setDifferencesPdfDialogOpen] =
    useState(false);

  return (
    <>
      {/* <!-- ===== Page Wrapper Star ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Star ===== --> */}
        <Sidebar
          setDialogOpen={setDialogOpen}
          setImageDialogOpen={setImageDialogOpen}
          setDifferencesPdfDialogOpen={setDifferencesPdfDialogOpen}
        />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Star ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Star ===== --> */}
          <Header />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Star ===== --> */}
          <main>
            <div className="mx-auto  p-4 md:p-6 2xl:p-10">{children}</div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
      <ReadmeDialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)} />
      <ImageFromEmailDialog
        isOpen={imageDialogOpen}
        onClose={() => setImageDialogOpen(false)}
      />
      <DifferencesPdfDialog
        isOpen={differencesPdfDialogOpen}
        onClose={() => setDifferencesPdfDialogOpen(false)}
      />
    </>
  );
}
