const MAIN_CATEGORIES = [
  "смартфон",
  "ноутбук",
  "планшет",
  "телевизор",
  "видеокарта",
  "монитор",
  "принтер"
]

const ACCESSORY_CATEGORIES = [
  "умные_часы", "наушники", "акустика", "накопитель", "мышь", "клавиатура",
  "роутер", "пылесос", "камера", "кулер", "корпус", "блок_питания", "вебкамера", "ssd", "жесткий_диск"
]

// 👇 Привязка аксессуаров к основным категориям
const ACCESSORY_BINDINGS = {
  смартфон: ["наушники", "умные_часы", "акустика", "накопитель", "роутер", "зарядка", "чехол"],
  ноутбук: ["монитор", "мышь", "клавиатура", "накопитель", "вебкамера", "принтер", "роутер", "акустика"],
  планшет: ["наушники", "умные_часы", "накопитель", "акустика", "чехол"],
  телевизор: ["акустика", "накопитель", "роутер", "пульт", "крепление"],

  видеокарта: ["накопитель", "блок_питания", "корпус", "кулер", "монитор", "мышь", "клавиатура", "жесткий_диск", "ssd"],
  монитор: ["видеокарта", "кабель", "подставка", "клавиатура", "мышь"],
  принтер: ["бумага", "чернила", "кабель", "накопитель", "роутер"]
}

function isCategory(tag) {
  return MAIN_CATEGORIES.includes(tag) || ACCESSORY_CATEGORIES.includes(tag)
}

function isMainCategory(tag) {
  return MAIN_CATEGORIES.includes(tag)
}

function isAccessoryCategory(tag) {
  return ACCESSORY_CATEGORIES.includes(tag)
}

export function getRecommendations(viewedItems, allItems, options = {}) {
  const { excludeId = null, mode = "all", currentItem = null } = options

  const viewedTags = new Set(viewedItems.flatMap((item) => item.tags))
  const currentCategory = currentItem?.tags.find(isCategory)

  return allItems
    .filter((item) => item.id !== excludeId)
    .filter((item) => {
      const itemCategory = item.tags.find(isCategory)

      if (mode === "alternatives") {
        return itemCategory === currentCategory
      }

      if (mode === "accessories") {
        const allowed = ACCESSORY_BINDINGS[currentCategory] || []
        return isAccessoryCategory(itemCategory) && allowed.includes(itemCategory)
      }

      return true
    })
    .map((item) => {
      const score = item.tags.filter((tag) => viewedTags.has(tag)).length
      return { ...item, score }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
}

export {
  MAIN_CATEGORIES,
  ACCESSORY_CATEGORIES
}
