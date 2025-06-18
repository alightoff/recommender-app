export default function SearchAndFilters({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  onOpenFilters
}) {
  const categories = ["все", "смартфон", "ноутбук", "планшет", "умные_часы", "наушники"]

  return (
    <div className="backdrop-blur-md bg-white/30 border border-white/50 rounded-xl shadow p-4 mb-6 flex flex-col sm:flex-row sm:items-center gap-4">
      {/* Поле поиска */}
      <input
        type="text"
        placeholder="Поиск товаров..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 px-4 py-2 rounded-lg bg-white/80 border border-gray-300 text-sm placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-200"
      />

      {/* Кнопки категорий */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat === "все" ? null : cat)}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              selectedCategory === cat || (cat === "все" && !selectedCategory)
                ? "bg-blue-600 text-white"
                : "bg-white/70 text-gray-700 border border-gray-300"
            } transition`}
          >
            {cat[0].toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Кнопка фильтра */}
      <button
        onClick={onOpenFilters}
        className="px-4 py-2 text-sm rounded-lg bg-white/70 text-gray-800 border border-gray-300 hover:bg-white transition ml-auto"
      >
        ⚙️ Фильтр
      </button>
    </div>
  )
}
