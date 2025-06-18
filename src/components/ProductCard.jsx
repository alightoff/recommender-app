import { Link } from "react-router-dom"

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="flex flex-col rounded-xl border border-gray-200 bg-white shadow hover:shadow-md transition overflow-hidden"
    >
      {/* Контейнер с фиксированной высотой под картинку */}
      <div className="h-52 w-full bg-white flex items-center justify-center p-3">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Информация о товаре */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base font-semibold leading-snug mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-800 font-bold mb-1">{product.price} ₽</p>
        <p className="text-xs text-gray-500 line-clamp-2">
          {product.tags.join(", ")}
        </p>
      </div>
    </Link>
  )
}
