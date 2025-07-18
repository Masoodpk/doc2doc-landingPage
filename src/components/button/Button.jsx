
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Button({ className = '' }) {
  return (
    <button
      className={`
        inline-flex items-center justify-end gap-7 text-[#511B4D] text-[16px] 
        h-[49px] w-[179px] font-semibold
        bg-[#F2B94A] 
        hover:from-orange-500
        rounded-full cursor-pointer
        ${className}
      `}
    >
      <span>Contact Us</span>
      <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-sm mr-1">
        <ArrowRight />
      </div>
    </button>
  );
}
