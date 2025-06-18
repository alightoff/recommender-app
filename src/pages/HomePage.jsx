import { useState } from "react"
import { products } from "../data/products"
import FilterPanel from "../components/FilterPanel"
import { Link } from "react-router-dom"
import { getSortedForMainPage } from "../utils/sortByViewedCategory"
import useViewedStore from "../store/viewedStore"

export default function HomePage() {
  const viewedItems = useViewedStore((state) => state.viewedItems)
  const sortedProducts = getSortedForMainPage(viewedItems, products)

  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(999999)
  const [sortOrder, setSortOrder] = useState("") // "asc" | "desc"

  const filteredProducts = sortedProducts
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = !selectedCategory || product.tags.includes(selectedCategory)
      const matchesPrice = product.price >= minPrice && product.price <= maxPrice
      return matchesSearch && matchesCategory && matchesPrice
    })
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price
      if (sortOrder === "desc") return b.price - a.price
      return 0
    })

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Каталог товаров</h1>

      {/* 🔎 Поиск + кнопки + фильтр */}
      <div className="flex flex-col gap-4 mb-6">
        {/* 🔍 Поиск + сброс */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <input
            type="text"
            placeholder="Поиск по названию..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 min-w-[200px] px-4 py-2 rounded bg-white/60 backdrop-blur border border-gray-300 focus:outline-none"
          />

          <button
            onClick={() => {
              setSearch("")
              setSelectedCategory("")
              setMinPrice(0)
              setMaxPrice(999999)
              setSortOrder("")
            }}
            className="px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
          >
            Сбросить фильтры
          </button>
        </div>

        {/* 🟦 Категории и фильтр */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setSelectedCategory("")}
            className={`px-3 py-1 rounded-full border text-sm ${
              selectedCategory === "" ? "bg-blue-600 text-white" : "bg-white/70"
            }`}
          >
            Все
          </button>

          {["смартфон", "ноутбук", "планшет", "телевизор", "наушники", "умные_часы"].map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedCategory(tag)}
              className={`px-3 py-1 rounded-full border text-sm ${
                selectedCategory === tag ? "bg-blue-600 text-white" : "bg-white/70"
              }`}
            >
              {tag}
            </button>
          ))}

          <button
            onClick={() => setFiltersOpen(true)}
            className="px-4 py-1 rounded-full border bg-gray-100 hover:bg-gray-200 text-sm"
          >
            ⚙️ Фильтры
          </button>
        </div>
      </div>

      {/* 🛍️ Сетка товаров */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="bg-white/60 backdrop-blur rounded-xl border border-gray-300 hover:shadow-md transition overflow-hidden flex flex-col"
          >
            <div className="h-48 flex items-center justify-center bg-white/40">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-44 object-contain p-2"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
              <p className="text-gray-700 font-medium">{product.price.toLocaleString()} ₽</p>
            </div>
          </Link>
        ))}
      </div>

      {/* 📦 Панель фильтрации */}
      <FilterPanel
        isOpen={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
    </div>
  )
}
