import logo from "../assets/logo.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

export default function Footer() {
  return (
    <footer className="bg-black p-16 flex text-white">
      <div className="w-full">
        <img src={logo} className="mb-4" />
        <ul className="mb-2 flex gap-8">
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className="mb-4 flex gap-8">
          <li>
            <a href="tel:+36301234567">+36 30 123 4567</a>
          </li>
          <li>
            <a href="mailto:support@dineease.com">support@dineease.com</a>
          </li>
        </ul>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
      <div className="shrink-0 w-1/3 md:w-48">
        <p className="mb-4">Follow Us</p>
        <ul className="flex gap-2">
          <li>
            <a href="https://facebook.com" target="_blank">
              <img src={facebook} />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank">
              <img src={instagram} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
