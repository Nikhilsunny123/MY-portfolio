import Link from "next/link";
import { useState } from "react";
import Dropdown from "./Dropdown";

function Header() {
  return (
    <div className="sticky top-0 z-50 w-full">
      <header className="flex justify-end p-8 h-auto bg-slate-900">
        <div className="hidden sm:block">
          <ul className="  space-x-10 flex gap-20 m-5">
            <Link href="/">
              <li className="text-lg cursor-pointer hover:text-green-600">
                Home
              </li>
            </Link>
            <Link href="/projects">
              <li className="cursor-pointer hover:text-green-300">Projects </li>
            </Link>
            <Link href="/contact">
              <li className="cursor-pointer hover:text-green-600">Contact </li>
            </Link>

            <li className="cursor-pointer hover:text-green-600">
              <a
                href="https://drive.google.com/file/d/1bkMWE792mU17BJGvhkvt3bi0S7qvNsu8/view?usp=share_link"
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
