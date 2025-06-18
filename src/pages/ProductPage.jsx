import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { products } from "../data/products.jsx"
import useViewedStore from "../store/viewedStore"
import Recommendations from "../components/Recommendations"

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const addViewedItem = useViewedStore((state) => state.addViewedItem)

  useEffect(() => {
    if (product) addViewedItem(product)
  }, [product])

  if (!product) {
    return <div className="p-6 text-red-500">Товар не найден.</div>
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-start bg-white rounded-xl shadow p-6 border border-gray-100">
        {/* Изображение */}
        <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-50 p-4 rounded">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full max-h-[300px] object-contain"
          />
        </div>

        {/* Описание */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-xl text-hackerGreen font-semibold">{product.price} ₽</p>

          <div className="flex flex-wrap gap-2 mt-2">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600 border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Блок рекомендаций */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Рекомендации:</h2>
        <Recommendations currentProduct={product} />
      </div>
    </div>
  )
}
