"use client";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandItem,
} from "@/components/ui/command";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";

export default function SearchInput() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer flex w-full items-center p-1 px-2 mx-5 bg-[var(--color-light-gray)] rounded-lg border border-[var(--color-secondary-gray)]"
      >
        <Search className="w-5 h-5 mr-2 text-[var(--color-third-gray)]" />
        <span className="flex-1 font-geist-medium text-sm leading-4 text-[var(--color-third-gray)]">
          Enter Accounts, Platforms, NFTs, Token
        </span>
        <div className="flex items-center justify-center bg-[var(--color-gray)] rounded font-geist-medium">
          <kbd className="flex items-center justify-center text-xs text-[var(--color-third-gray)] font-geist-medium p-1">
            ⌘ K
          </kbd>
        </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>not found</CommandEmpty>
          <CommandItem>Example 1</CommandItem>
          <CommandItem>Example 2</CommandItem>
        </CommandList>
      </CommandDialog>
    </>
  );
}
