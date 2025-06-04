// src/components/Banner/BannerControls.tsx
import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface BannerControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

const BannerControls: React.FC<BannerControlsProps> = ({ onPrev, onNext }) => (
  <>
    <button
      onClick={onPrev}
      className="absolute top-1/2 left-4 z-10 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/70 transition"
      aria-label="Anterior"
    >
      <FiChevronLeft size={24} />
    </button>
    <button
      onClick={onNext}
      className="absolute top-1/2 right-4 z-10 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/70 transition"
      aria-label="Próximo"
    >
      <FiChevronRight size={24} />
    </button>
  </>
);

export default BannerControls;
