'use client';

import Image from "next/image";
import React from "react";

export default function Footer() {

  return (
      <footer className="row-start-3 w-full flex flex-col md:flex-row-reverse gap-8 mt-16 md:mt-0 justify-between items-center sm:p-20 p-8">
        <div className="flex gap-2 flex-wrap items-center justify-center">
          <a
              aria-label="Open Community Email"
              className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#e44a32] hover:bg-opacity-30 rounded-full p-3"
              href="mailto:contact@theopencommunity.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/socials/mail.svg"
                alt="mail icon"
                width={22}
                height={22}
              />
          </a>
          <a
              aria-label="Open Community on GitHub"
              className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#e44a32] hover:bg-opacity-30 rounded-full p-3"
              href="https://github.com/abdibrokhim?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/socials/github-mark-white.svg"
                alt="github icon"
                width={22}
                height={22}
              />
          </a>
          <a
              aria-label="Open Community on Discord"
              className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#e44a32] hover:bg-opacity-30 rounded-full p-3"
              href="https://discord.gg/nVtmDUN2sR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/socials/discord.svg"
                alt="discord icon"
                width={22}
                height={22}
              />
            </a>
            <a
              aria-label="Open Community on LinkedIn"
              className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#e44a32] hover:bg-opacity-30 rounded-full p-3"
              href="https://linkedin.com/company/opencommunity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/socials/linkedin.svg"
                alt="linkedin icon"
                width={22}
                height={22}
              />
            </a>
            <a
              aria-label="Open Community on X"
              className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#e44a32] hover:bg-opacity-30 rounded-full p-3"
              href="https://x.com/xopencommunity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/socials/x.svg"
                alt="x icon"
                width={22}
                height={22}
              />
            </a>
            <a
              aria-label="Open Community on Instagram"
              className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#e44a32] hover:bg-opacity-30 rounded-full p-3"
              href="https://instagram.com/theopencommunity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/socials/instagram.svg"
                alt="instagram icon"
                width={22}
                height={22}
              />
            </a>
            <a
              aria-label="Open Community on YouTube"
              className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#e44a32] hover:bg-opacity-30 rounded-full p-3"
              href="https://youtube.com/@theopencommunity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/socials/youtube.svg"
                alt="youtube icon"
                width={22}
                height={22}
              />
            </a>
        </div>
        <div className="">
          <p className="text-sm text-center text-[var(--tint)]">
            © 2024 Open Community. All rights reserved.
          </p>
        </div>
      </footer>
  );
}
