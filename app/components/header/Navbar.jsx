import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center py-4">
        <div className="nav-brand">
          <Link href="/">
            <Image
              src="/logo.jpeg"
              alt="Eventry"
              className="h-[45px]"
              width={150}
              height={50}
            />
          </Link>
        </div>

        <ul className="flex gap-4 text-[#9C9C9C]">
          <li>
            <Link
              className="bg-gray-800 px-3 py-1 text-white capitalize font-semibold "
              href={`#`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="bg-gray-800 px-3 py-1 text-white capitalize font-semibold "
              href={`#`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
