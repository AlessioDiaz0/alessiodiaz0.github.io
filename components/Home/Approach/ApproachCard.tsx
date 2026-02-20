import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  icon: string;
  name: string;
  description: string;

  // Mobile control (passed from parent)
  mobile?: boolean;
  isFlipped?: boolean;
  onToggle?: () => void;
};

const ApproachCard = ({
  icon,
  description,
  name,
  mobile = false,
  isFlipped = false,
  onToggle,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const flipped = mobile ? isFlipped : isHovered;

  return (
    <button
      type="button"
      className={[
        "group [perspective:1000px] w-full h-full cursor-pointer text-left",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded-2xl",
      ].join(" ")}
      onClick={() => {
        if (mobile) onToggle?.();
      }}
      onMouseEnter={() => {
        if (!mobile) setIsHovered(true);
      }}
      onMouseLeave={() => {
        if (!mobile) setIsHovered(false);
      }}
      aria-pressed={mobile ? isFlipped : undefined}
    >
      <motion.div
        className="relative h-full w-full rounded-2xl [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.2, ease: "circOut" }}
      >
        {/* Front */}
        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] flex flex-col items-center justify-center p-4 md:p-8 bg-[#130f2a] rounded-2xl border border-gray-800 shadow-xl group-hover:border-blue-500/50 transition-colors duration-300">
          <div className="p-3 md:p-4 bg-gray-900/50 rounded-full border border-gray-700">
            <Image src={icon} alt={name} width={60} height={60} className="object-contain" />
          </div>
          <h1 className="mt-4 md:mt-6 text-base sm:text-lg md:text-2xl font-bold text-gray-200 text-center tracking-tight">
            {name}
          </h1>
        </div>

        {/* Back */}
        {/* Back */}
<div className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center p-4 md:p-8 bg-[#130f2a] rounded-2xl border border-blue-500/40 shadow-2xl bg-gradient-to-br from-blue-900 to-purple-900">
  <h2 className="text-blue-400 font-bold mb-3 md:mb-4 uppercase text-xs md:text-sm tracking-widest">
    {name}
  </h2>
  <p className="text-gray-200 text-center text-xs sm:text-sm md:text-base leading-relaxed italic">
    "{description}"
  </p>
</div>
      </motion.div>
    </button>
  );
};

export default ApproachCard;
