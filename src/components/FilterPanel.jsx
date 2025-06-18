import { useEffect } from "react"

export default function FilterPanel({
  isOpen,
  onClose,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  sortOrder,
  setSortOrder,
}) {
  // Закрытие по Esc
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* затемнение фона */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* панель */}
      <div className="relative bg-white/30 backdrop-blur-lg border border-white/40 rounded-xl shadow-lg p-6 w-[90%] max-w-md text-sm text-gray-800">
        <h2 className="text-lg font-semibold mb-4">Фильтрация</h2>

        {/* Фильтр: цена от */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Цена от:</label>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="w-full px-3 py-1 rounded border border-gray-300 bg-white/70"
            placeholder="например, 10000"
          />
        </div>

        {/* Фильтр: цена до */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Цена до:</label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full px-3 py-1 rounded border border-gray-300 bg-white/70"
            placeholder="например, 50000"
          />
        </div>

        {/* Сортировка */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Сортировка по цене:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full px-3 py-1 rounded border border-gray-300 bg-white/70"
          >
            <option value="">Без сортировки</option>
            <option value="asc">По возрастанию</option>
            <option value="desc">По убыванию</option>
          </select>
        </div>

        {/* Кнопки */}
        <div className="flex justify-end gap-2 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
          >
            Готово
          </button>
        </div>
      </div>
    </div>
  )
}
