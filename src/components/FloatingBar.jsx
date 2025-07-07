"use client";
import React from "react";
import Github from "./icons/Github";
import Home from "./icons/Home";
import LinkedIn from "./icons/LinkedIn";
import Twitter from "./icons/Twitter";
import Whatsapp from "./icons/Whatsapp";
import ToggleThemeBtn from "./ToggleThemeBtn";
import Link from "next/link";

const FloatingBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 md:top-4 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      {/* Blurred background bar */}
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>

      {/* Main floating bar */}
      <div className="w-max p-2 rounded-full border z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-black/50 dark:bg-black/50 backdrop-blur-lg [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
        <div
          data-orientation="vertical"
          role="none"
          className="shrink-0 bg-border w-[1px] h-full"
        ></div>

        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full w-[40px]">
          <Link
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
            aria-label="GitHub"
            href="https://github.com/B-Shankar"
            target="_blank"
          >
            <Github />
          </Link>
        </div>

        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full w-[40px]">
          <Link
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/bhimashankar1/"
            target="_blank"
          >
            <LinkedIn />
          </Link>
        </div>

        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full w-[40px]">
          <Link
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
            aria-label="Whatsapp"
            href="https://wa.me/917411171615"
            target="_blank"
          >
            <Whatsapp />
          </Link>
        </div>

        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full w-[40px]">
          <Link
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
            aria-label="X"
            href="https://x.com/bhimashankar_"
            target="_blank"
          >
            <Twitter />
          </Link>
        </div>

        <div
          data-orientation="vertical"
          role="none"
          className="shrink-0 bg-border w-[1px] h-full py-2"
        ></div>

        {/* Toggle button shown only on md and up */}
        <div className="hidden md:flex aspect-square cursor-pointer items-center justify-center rounded-full w-[40px]">
          <ToggleThemeBtn />
        </div>
      </div>

      {/* Mobile-only toggle with transparent blurred background */}
      <div className="fixed top-4 right-4 z-50 md:hidden backdrop-blur-lg bg-black/50 dark:bg-black/50 border rounded-full p-1 w-10 h-10 flex items-center justify-center [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)]">
        <ToggleThemeBtn />
      </div>
    </div>
  );
};

export default FloatingBar;