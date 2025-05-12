import Orbit from "@/components/Orbit"; 
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";
import { goToHome } from "@/utils/navigation";
import { useRouter } from "next/router";
import React from "react";

const SigninCard = () => {
  const router = useRouter();
  const signIn = useAuthStore((state) => state.signIn);

  const handleConnect = () => {
    signIn();
    goToHome(router);
  };

  return (
    <div className="bg-[var(--color-gray)] max-w-[29rem] w-full h-[42rem] border border-[#282828] rounded-3xl flex flex-col items-center justify-around p-4 sm:h-[35rem] md:h-[40rem] lg:h-[42rem]">
      <div>
        <Orbit />
      </div>

      <div className="text-center flex flex-col items-center max-w-[26.5rem] gap-4">
        <h1 className="font-geist-medium text-[var(--color-white)] leading-6 text-2xl sm:text-xl md:text-2xl">
          Refer friends and earn with Patara!
        </h1>
        <p className="font-geist-regular text-[var(--color-third-gray)] leading-[22px] text-base sm:text-sm max-w-[22rem] mx-auto">
          Invite your friends to Patara and earn a share of their on-chain rewards forever!
        </p>

        <div className="mt-6">
          <Button
            className="rounded-lg leading-5 font-geist-medium text-sm h-[48px] sm:h-[40px]"
            variant="default"
            onClick={handleConnect}
          >
            Connect/Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SigninCard;
