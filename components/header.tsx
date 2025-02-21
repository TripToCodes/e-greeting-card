import Image from "next/image";
import Link from "next/link";
import { PersonCircle, Cart3 } from "react-bootstrap-icons";

function Header() {
  return (
    <header className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">
            <Image src="/ecards_logo.png" alt="logo" width={200} height={80} />
          </Link>
        </div>
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/cards" className="text-gray-700 hover:text-blue-600">
                Cards
              </Link>
            </li>
            <li>
              <Link href="/my-account">
                <PersonCircle />
              </Link>
            </li>
            <li>
              <Link href="/my-cart">
                <Cart3 />
              </Link>
            </li>
            <li>
              <Link href="/login" className="text-gray-700 hover:text-blue-600">
                Log In
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
