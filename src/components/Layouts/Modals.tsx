'use client';
import React, { useState, Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

export const ReadmeDialog = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <dialog open={isOpen} style={{ zIndex: 9999 }}>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-50 backdrop-blur-sm">
        <div className="bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-lg shadow-lg p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-xl font-bold">
            &times;
          </button>
          <object
            data="/readme.html"
            className="w-full h-full"
            title="README"></object>
        </div>
      </div>
    </dialog>
  );
};

export const ImageFromEmailDialog = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <dialog open={isOpen} style={{ zIndex: 9999 }}>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-50 backdrop-blur-sm">
        <div className="w-full bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 min-h-content rounded-lg shadow-lg p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-xl font-bold">
            &times;
          </button>
          <Image
            quality={100}
            width={100}
            height={100}
            src="/image-from-email.png"
            alt="Image from Email"
            className="w-full h-full"
          />
        </div>
      </div>
    </dialog>
  );
};

export const DifferencesPdfDialog = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <dialog open={isOpen} style={{ zIndex: 9999 }}>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-50 backdrop-blur-sm">
        <div className="bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-lg shadow-lg p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-xl font-bold">
            &times;
          </button>
          <object
            data="/differences.pdf"
            className="w-full h-full"
            type="application/pdf"
            title="Differences PDF"></object>
        </div>
      </div>
    </dialog>
  );
};
