import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm px-6 py-4 mb-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-hackerGreen">
          🛒 ЭлектроМаркет
        </Link>
        <nav className="space-x-4 text-sm font-medium">
          <Link to="/" className="text-gray-700 hover:text-hackerGreen transition">Главная</Link>
        </nav>
      </div>
    </header>
  )
}
