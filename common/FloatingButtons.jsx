"use client";
import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { BRAND } from "../utils/constants";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={BRAND.whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-40"
        aria-label="Hablar por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          width="40"
          height="40"
        >
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.693 4.607 2.006 6.553L4 29l7.684-2.006A12.93 12.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.91-.521-5.59-1.507l-.398-.232-4.561 1.19 1.217-4.444-.26-.409A9.93 9.93 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.43c-.278-.139-1.646-.812-1.9-.904-.254-.093-.439-.139-.625.139-.186.278-.719.904-.881 1.09-.163.186-.325.209-.603.07-.278-.139-1.175-.433-2.238-1.38-.827-.736-1.386-1.644-1.549-1.922-.163-.278-.017-.428.122-.567.125-.124.278-.325.417-.488.139-.163.186-.278.278-.464.093-.186.047-.348-.023-.488-.07-.139-.625-1.507-.857-2.064-.226-.543-.456-.47-.625-.479l-.532-.009c-.163 0-.428.06-.652.278-.223.217-.853.833-.853 2.03s.874 2.353.996 2.518c.122.163 1.719 2.627 4.172 3.579.584.201 1.038.321 1.393.411.585.149 1.119.128 1.539.078.47-.056 1.646-.673 1.88-1.324.233-.651.233-1.209.163-1.324-.07-.116-.255-.186-.532-.325z" />
        </svg>
      </a>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all z-40"
          aria-label="Volver arriba"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
