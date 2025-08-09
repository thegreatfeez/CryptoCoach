import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="flex items-center justify-center bg-gray-900 text-white p-4 space-x-3 shadow-md">
      <FontAwesomeIcon icon={faCoins} className="text-yellow-400 text-4xl" />
      <h1 className="text-2xl font-bold tracking-wide">CryptoCoach</h1>
    </header>
  );
}
