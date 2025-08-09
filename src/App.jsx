import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <FontAwesomeIcon icon={faCoffee} className="text-5xl text-purple-600 mb-4" />
        <h1 className="text-3xl font-bold">Enjoy your coffee!</h1>
      </div>
    </div>
  );
}