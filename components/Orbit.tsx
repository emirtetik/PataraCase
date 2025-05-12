// import Image from "next/image";
import React from "react";
import Avatar from "./avatar";

const Orbit = () => {
  const ringDiameters = [130.61, 159.35, 189.39, 218.12, 248.16];
  const totalImages = 8;
  //   const imageUrls = [
  //     "/images/P.png",
  //     "/images/M.png",
  //     "/images/A.png",
  //     "/images/W.png",
  //     "/images/C.png",
  //     "/images/G.png",
  //     "/images/S.png",
  //     "/images/F.png",
  //   ];
  const maxDiameter = Math.max(...ringDiameters);

  return (
    <div
      className="relative flex items-center justify-center rounded-full scale-[0.85] md:scale-100"
      style={{ width: `${maxDiameter}px`, height: `${maxDiameter}px` }}
    >
      <div className="absolute rounded-full w-40 h-40 bg-[#53B1FD] opacity-80 blur-[222px]" />
      {ringDiameters.map((diameter, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-white"
          style={{
            width: `${diameter}px`,
            height: `${diameter}px`,
            opacity: 0.8 - i * 0.15,
          }}
        />
      ))}

      <Avatar />

      {[
        {
          letter: "S",
          style: "bg-gradient-to-tr from-purple-400 via-pink-300 to-white",
        },
        {
          letter: "F",
          style: "bg-gradient-to-bl from-teal-300 via-cyan-100 to-white",
        },
        {
          letter: "P",
          style: "bg-gradient-to-b from-red-400 via-pink-300 to-white",
        },
        {
          letter: "M",
          style: "bg-gradient-to-bl from-yellow-300 via-yellow-100 to-white",
        },
        {
          letter: "A",
          style: "bg-gradient-to-br from-orange-300 via-cyan-200 to-white",
        },
        {
          letter: "W",
          style: "bg-gradient-to-tr from-green-300 via-indigo-200 to-white",
        },
        {
          letter: "C",
          style:
            "bg-gradient-to-t from-pink-400 via-purple-300 via-[#8EECFC] via-[#FF8541] via-[#FF854100] via-[#A8C0FF] to-white",
        },
        {
          letter: "G",
          style:
            "bg-gradient-to-tl from-yellow-400 via-[#FFE58A] via-amber-300 to-[#677FFB] via-[#FF8541]",
        },
      ].map(({ letter, style }, i) => {
        const angleOffset = Math.PI;
        const angle = (i / totalImages) * 2 * Math.PI + angleOffset;
        const radius = maxDiameter / 1.9;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <div
            key={i}
            className={`absolute ${style} text-3xl w-12 h-12 text-[var(--color-letter-gray)]  rounded-full  flex items-center justify-center`}
            style={{
              top: `calc(50% - 26px + ${y}px)`,
              left: `calc(50% - 26px + ${x}px)`,
            }}
          >
            {letter}
          </div>
        );
      })}
    </div>
  );
};

export default Orbit;
