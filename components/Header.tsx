 import { HeartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="w-full flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">Star Wars App</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/favourites">
              <HeartIcon className="w-6 h-6 text-red-500" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
