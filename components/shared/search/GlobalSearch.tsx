"use client";
import { Input } from "@/components/ui/input";
import { useEffect, useRef } from "react";
import { Search } from "lucide-react";

const GlobalSearch = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    function listenInputKey(e: KeyboardEvent) {
      if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current && inputRef.current.focus();
        inputRef.current && inputRef.current.select();
      }

      if (e.key === "Escape" && document.activeElement === inputRef.current) {
        inputRef.current && inputRef.current.blur();
      }
    }
    document.addEventListener("keydown", listenInputKey);

    return () => {
      document.removeEventListener("keydown", listenInputKey);
    };
  }, []);

  return (
    <div className="flex-center relative w-full max-w-[600px] max-lg:hidden">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer" />
      <Input
        className="paragraph-regular no-focus placeholder rounded-full border-gray-400 bg-transparent p-5 pl-14 text-base shadow-none outline-none hover:border-transparent hover:bg-gray-200 hover:shadow-lg focus:border-transparent focus:bg-gray-200 focus:shadow-lg dark:border-gray-700 dark:hover:border-transparent dark:hover:bg-dark-400 dark:focus:border-transparent dark:focus:bg-dark-400"
        type="text"
        placeholder="Search..."
        ref={inputRef}
        // value=""
      />
    </div>
  );
};
export default GlobalSearch;
