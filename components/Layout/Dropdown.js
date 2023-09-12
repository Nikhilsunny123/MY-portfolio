import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import menuicon from "../../images/icons/menu-bar.png";
import { useRouter } from "next/router";

function Dropdown() {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  return (
    <div className=" group-hover:block  md:hidden sm:hidden ">
      <Image
        src={menuicon}
        onClick={() => setShowDropdown(!showDropdown)}
        className="text-white  bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        width={50}
        height={50}
        alt="menu"
      />

      {showDropdown && (
        <div
          class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-slate-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            <ul className="">
              <Link href="/">
                <li
                className={`cursor-pointer ${
                  router.pathname=="/" && "text-green-300"
                } hover:text-green-600 block px-4 py-2 text-sm`}
                 
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  Home
                </li>
              </Link>
              <Link href="/projects">
                <li
                className={`cursor-pointer  ${
                  router.pathname.includes("/projects") && "text-green-300"
                } hover:text-green-600 block px-4 py-2 text-sm`}
                
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  Projects
                </li>
              </Link>
              <Link href="/contact">
                <li
                 className={`cursor-pointer  ${
                  router.pathname.includes("/contact") && "text-green-300"
                } hover:text-green-600 block px-4 py-2 text-sm`}
                
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  Contact
                </li>
              </Link>
              <li className="cursor-pointer hover:text-green-600 block px-4 py-2 text-sm">
                <a
                  href="https://drive.google.com/file/d/1bkMWE792mU17BJGvhkvt3bi0S7qvNsu8/view?usp=share_link"
                  alt="alt text"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  Resume
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
