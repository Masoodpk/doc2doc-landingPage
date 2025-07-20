import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Button({ className = '', label = 'Contact Us' }) {
  return (
    <button
      className={`
        inline-flex items-center justify-end gap-5 md:gap-7 text-[#511B4D] text-[12px] md:text-[16px] 
      h-[28px]  md:h-[49px] w-[115px] md:w-[179px] font-semibold
        bg-[#F2B94A] 
        hover:from-orange-500
        rounded-full cursor-pointer
        ${className}
      `}
    >
      <span>{label}</span>
      <div className="flex items-center justify-center w-5 md:w-10 h-5 md:h-10 bg-white rounded-full shadow-sm mr-1">
        <ArrowRight className='h-3 w-3 md:h-6 md:w-6' />
      </div>
    </button>
  );
}
