import { CustomCard } from "@/components/card/customCard";
import Orbit from "@/components/Orbit";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { x: -300, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
const fadeInRight = {
  hidden: { x: 300, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 px-4 w-full">
      <div className="flex-1 bg-[var(--color-gray)] py-10 rounded-3xl flex flex-col lg:flex-row items-center justify-around w-full overflow-hidden">
        <div className="flex flex-col gap-10 w-full max-w-full lg:max-w-[384px]">
          <motion.div
            className="flex flex-col gap-5 w-full px-4 sm:px-0"
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.3 }}
            variants={fadeInLeft}
          >
            <h1 className="font-inter text-[var(--color-white)] text-2xl sm:text-[32px] leading-8 tracking-tighter break-words">
              Refer and Earn
            </h1>
            <p className="font-geist-regular text-[var(--color-third-gray)] text-sm sm:text-base leading-5 break-words">
              Invite your friends to Patara and earn a share of their on-chain
              rewards forever!
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.div
              className="bg-[var(--color-light-gray)] rounded-lg  p-5  flex flex-col gap-2"
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.3 }}
              variants={fadeInLeft}
            >
              <h1 className="text-[var(--color-third-gray)] text-sm leading-[18px]">
                Your Referral Link
              </h1>
              <p className="font-geist-medium text-xs sm:text-base text-[var(--color-white)] leading-[18px] overflow-hidden">
                0x0e0Fcb520F76f3eAC0Aa764De4B97C53Eb366158
              </p>
            </motion.div>

            <motion.div
              className="flex  gap-2 w-full px-4 sm:px-0"
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.3 }}
              variants={fadeInLeft}
            >
              <Button
                variant="default"
                size="lg"
                className="rounded-lg font-geist-medium flex-1"
              >
                Copy Link
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="rounded-lg text-sm font-geist-medium flex-1"
              >
                <Image
                  src={"/icons/share.png"}
                  width={18}
                  height={18}
                  alt={"share"}
                />{" "}
                Share
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="flex justify-center items-center   mt-20 lg:mt-0 "
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3 }}
          variants={fadeInRight}
        >
          <Orbit />
        </motion.div>
      </div>

      <div className="flex flex-col justify-around md:justify-between gap-6 md:gap-0   ">
        <CustomCard
          imageSrc="/icons/hand.png"
          title="Total Earned Free"
          value="$1.000.00"
        />
        <CustomCard
          imageSrc="/icons/snow.png"
          title="Unclaimed Free"
          value="$500.00"
          button={true}
        />
        <CustomCard
          imageSrc="/icons/suprise.png"
          title="Total Referral Points"
          value="1289"
        />
        <CustomCard imageSrc="/icons/user.png" title="Referrals" value="34" />
      </div>
    </div>
  );
};

export default Hero;
