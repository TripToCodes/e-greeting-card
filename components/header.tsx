import Image from "next/image";
import { PersonCircle, Cart3 } from "react-bootstrap-icons";
function Header() {
  return (
    <header className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          <Image src="/ecards_logo.png" alt="logo" width="200" height="80" />
        </div>
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Cards
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                <PersonCircle />
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                <Cart3 />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;
