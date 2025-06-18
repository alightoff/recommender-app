import {products} from "../data/products.jsx"
import useViewedStore from "../store/viewedStore"
import { getRecommendations } from "../utils/getRecommendations"
import ProductCard from "./ProductCard"

export default function Recommendations({ currentProduct }) {
  const viewedItems = useViewedStore((state) => state.viewedItems)

  const alternatives = getRecommendations(viewedItems, products, {
    excludeId: currentProduct.id,
    mode: "alternatives",
    currentItem: currentProduct,
  })

  const accessories = getRecommendations(viewedItems, products, {
    excludeId: currentProduct.id,
    mode: "accessories",
    currentItem: currentProduct,
  })

  return (
    <div className="space-y-6 mt-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Альтернативы:</h3>
        {alternatives.length === 0 ? (
          <p className="text-sm text-gray-500">Нет альтернатив.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {alternatives.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Аксессуары:</h3>
        {accessories.length === 0 ? (
          <p className="text-sm text-gray-500">Нет аксессуаров.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {accessories.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
