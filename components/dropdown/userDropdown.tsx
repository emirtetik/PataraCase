"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/store/authStore";
import Avatar from "../avatar";
import { ChevronDownIcon } from "lucide-react";
import { goToSignIn } from "@/utils/navigation";
import { useRouter } from "next/router";

export function UserDropdown() {
  const router = useRouter();
  const signOut = useAuthStore((state) => state.signOut);
  const handleOut = () => {
    signOut();
    goToSignIn(router);
  };
  return (
    <div className="bg-[var(--color-light-gray)] rounded-md px-1 py-1">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer focus:outline-none max-w-[170px] overflow-hidden truncate">
          <Avatar size={30} rounded="rounded-sm" style={{ flexShrink: 0 }} />
          <span className="text-sm font-geist-semibold leading-5 text-[var(--color-white)]">
            @patara.sui
          </span>
          <ChevronDownIcon className="size-4 text-[var(--color-white)]" />{" "}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-[var(--color-light-gray)] text-[var(--color-white)] rounded-lg justify-center items-center"
        >
          <DropdownMenuItem onClick={handleOut} className="cursor-pointer">
            Çıkış Yap
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
