import Link from "next/link";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-50 w-full">
      <header className="flex justify-end p-8 h-auto bg-slate-900">
        <div className="hidden sm:block">
          <ul className="  space-x-10 flex gap-20 m-5">
            <Link href="/">
              <li  className={`cursor-pointer ${
                  router.pathname=="/" && "text-green-300"
                } hover:text-green-300`}>
                Home
              </li>
            </Link>
            <Link href="/projects">
              <li
                className={`cursor-pointer ${
                  router.pathname.includes("/projects") && "text-green-300"
                } hover:text-green-300`}
              >
                Projects{" "}
              </li>
            </Link>
            <Link href="/contact">
              <li className={`cursor-pointer ${
                  router.pathname.includes("/contact") && "text-green-300"
                } hover:text-green-300`}>Contact </li>
            </Link>

            <li className="cursor-pointer hover:text-green-600">
              <a
                href="https://drive.google.com/file/d/1kSgnnJ2pXXTc3h2npCCH4_nFtyUQYfl7/view?usp=drive_link"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>{" "}
            </li>
          </ul>
        </div>
        <Dropdown />
      </header>
    </div>
  );
}

export default Header;
