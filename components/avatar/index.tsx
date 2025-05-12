"use client";
import Image from "next/image";
import { motion } from "framer-motion";
interface AvatarProps {
  size?: number;
  rounded?: string;
  style?: React.CSSProperties;
}

export default function Avatar({
  size = 80,
  rounded = "rounded-full",
  style,
}: AvatarProps) {
  const imageWidth = size * 0.467375;
  const imageHeight = size * 0.700999;
  const dotSize = size * 0.1;
  const dotTop = size * 0.3;
  const dotLeft = size * 0.5;

  return (
    <div
      className={`relative flex items-center justify-center ${style} ${rounded}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background:
          "radial-gradient(50% 50% at 50% 50%, #A284ED 0%, #6775FF 25%, #FFA3FE 50%, #4993E1 76%, #7FE8FF 99%)",
      }}
    >
      <div
        className="bg-[var(--color-white)] rounded-full absolute z-10"
        style={{
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          top: `${dotTop}px`,
          left: `${dotLeft}px`,
        }}
      />
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "linear",
        }}
      >
        <Image
          src="/images/Groups.png"
          alt="icon"
          width={imageWidth}
          height={imageHeight}
          className="mt-3"
        />
      </motion.div>
    </div>
  );
}
