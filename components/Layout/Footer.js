import Image from "next/image";
import Link from "next/link";
import email from "../../images/icons/email.svg";
import github from "../../images/icons/github.svg";
import linkedin from "../../images/icons/linkedin.svg";
import twitter from "../../images/icons/twitter.png";
const Footer = () => {
  return (
    <footer className="bottom-0 w-full mt-40 p-2 bg-blue rounded-lg shadow dark:bg-gray-900">
      <div className="container flex flex-col items-center gap-5">
        <h2 className=" text-2xl"> Get in Touch</h2>

        <ul className="flex flex-wrap gap-3">
          <li>
            <Link
              href={"https://github.com/Nikhilsunny123"}
              className="hover:underline "
            >
              <Image alt="github" src={github} height={50} width={50} />
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.linkedin.com/in/nikhil-sunny-48195b125/"}
              className=" hover:underline "
            >
              <Image alt="linkedin" src={linkedin} height={50} width={50} />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/NikhilSunny"
              className=" hover:underline "
            >
              <Image alt="twitter" src={twitter} height={50} width={50} />
            </Link>
          </li>
          <li>
            <Link
              href="mailto:nikhilsunny35@gmail.com"
              className=" hover:underline "
            >
              <Image alt="email" src={email} height={50} width={50} />
            </Link>
          </li>
        </ul>

        <p className="text-sm">Designed by Nikhil Sunny</p>
      </div>
    </footer>
  );
};

export default Footer;
