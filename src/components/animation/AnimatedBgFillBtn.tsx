import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import React from "react";

interface FancyButtonProps {
  label: string;
  className: string;
  icon?: boolean;
}

const AnimatedBgFillBtn: React.FC<FancyButtonProps> = ({ label, className, icon = false }) => {
  return (
    <button
      className={cn("group relative h-12 w-52  overflow-hidden rounded-full border-2 border-grayish-blue bg-transparent text-grayish-blue transition-all duration-700 hover:text-white hover:border-transparent hover:shadow-[1px_1px_200px_#4176A6] cursor-pointer", className)}
    >
      <span className="relative z-10 font-extrabold tracking-[1px] flex-center gap-x-1">
        {label} {icon && <ArrowUpRight className="group-hover:rotate-45 duration-500"/>}
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
