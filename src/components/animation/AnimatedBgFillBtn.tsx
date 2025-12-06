import { cn } from "@/lib/utils";
import React from "react";

interface FancyButtonProps {
  label: string;
  className: string;
}

const AnimatedBgFillBtn: React.FC<FancyButtonProps> = ({ label, className }) => {
  return (
    <button
      className={cn("group relative h-12 w-52  overflow-hidden rounded-full border-2 border-grayish-blue bg-transparent text-grayish-blue transition-all duration-700 hover:text-white hover:border-transparent hover:shadow-[1px_1px_200px_#4176A6] cursor-pointer", className)}
 >
      <span className="relative z-10 font-extrabold tracking-[1px]">
        {label}
      </span>

      {/* expanding background bubble */}
      <span
        className="
          absolute left-0 top-0 h-2 w-2 rounded-full bg-grayish-blue
          opacity-0 transition-all duration-700
          group-hover:opacity-100 group-hover:scale-[100] group-hover:translate-x-0.5
        "
      />
    </button>
  );
};

export default AnimatedBgFillBtn;
