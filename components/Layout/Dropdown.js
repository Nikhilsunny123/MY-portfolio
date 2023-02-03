import Link from "next/link";
import { useState } from "react";

function Dropdown() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      <div>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className=" hidden md:inline-flex text-white  bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        >
          Dropdown button
        </button>
        {showDropdown && (
          <ul className="absolute bg-white shadow-lg rounded-lg mt-2">
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
        )}
      </div>
    </div>
  );
}

export default Dropdown;
