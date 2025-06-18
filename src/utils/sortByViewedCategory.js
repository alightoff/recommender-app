import { getRecommendations, MAIN_CATEGORIES, ACCESSORY_CATEGORIES } from "./getRecommendations"

function isCategory(tag) {
  return MAIN_CATEGORIES.includes(tag) || ACCESSORY_CATEGORIES.includes(tag)
}

export function getSortedForMainPage(viewedItems, allItems) {
  if (!viewedItems.length) return allItems

  const current = viewedItems[viewedItems.length - 1]
  const currentCategory = current.tags.find(isCategory)

  const alternatives = getRecommendations(viewedItems, allItems, {
    mode: "alternatives",
    currentItem: current,
  })

  const accessories = getRecommendations(viewedItems, allItems, {
    mode: "accessories",
    currentItem: current,
  })

  const usedIds = new Set([
    ...alternatives.map((p) => p.id),
    ...accessories.map((p) => p.id),
    current.id
  ])

  const other = allItems.filter((p) => !usedIds.has(p.id))

  return [...alternatives, ...accessories, ...other]
}
