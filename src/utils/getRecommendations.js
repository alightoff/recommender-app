const MAIN_CATEGORIES = [
  "смартфон",
  "ноутбук",
  "планшет",
  "телевизор",
  "видеокарта",
  "монитор",
  "принтер",
  "пк"
]

const ACCESSORY_CATEGORIES = [
  "умные_часы", "наушники", "акустика", "накопитель", "мышь", "клавиатура",
  "роутер", "пылесос", "камера", "кулер", "корпус", "блок_питания",
  "вебкамера", "ssd", "жесткий_диск", "материнская_плата", "процессор", "оперативная_память"
]

const ACCESSORY_BINDINGS = {
  смартфон: ["наушники", "умные_часы", "акустика", "накопитель", "роутер", "зарядка", "чехол"],
  ноутбук: ["монитор", "мышь", "клавиатура", "накопитель", "вебкамера", "принтер", "роутер", "акустика"],
  планшет: ["наушники", "умные_часы", "накопитель", "акустика", "чехол"],
  телевизор: ["акустика", "накопитель", "роутер", "пульт", "крепление"],
  видеокарта: ["накопитель", "блок_питания", "корпус", "кулер", "монитор", "мышь", "клавиатура", "жесткий_диск", "ssd"],
  монитор: ["видеокарта", "кабель", "подставка", "клавиатура", "мышь"],
  принтер: ["бумага", "чернила", "кабель", "накопитель", "роутер"],
  пк: [
    "видеокарта", "накопитель", "жесткий_диск", "ssd", "блок_питания",
    "материнская_плата", "процессор", "оперативная_память", "монитор",
    "мышь", "клавиатура", "корпус", "кулер", "вебкамера", "принтер", "роутер"
  ]
}

function isMainCategory(tag) {
  return MAIN_CATEGORIES.includes(tag)
}

function isAccessoryCategory(tag) {
  return ACCESSORY_CATEGORIES.includes(tag)
}

function findCategory(tags = []) {
  // если есть основная категория, вернуть её
  const main = tags.find(isMainCategory)
  if (main) return { type: "main", value: main }

  // если есть аксессуар — вернуть его как категорию
  const accessory = tags.find(isAccessoryCategory)
  if (accessory) return { type: "accessory", value: accessory }

  return { type: "unknown", value: null }
}

export function getRecommendations(viewedItems, allItems, options = {}) {
  const { excludeId = null, mode = "all", currentItem = null } = options

  const viewedTags = new Set(viewedItems.flatMap((item) => item.tags))
  const { type: currentType, value: currentCategory } = findCategory(currentItem?.tags)

  return allItems
    .filter((item) => item.id !== excludeId)
    .filter((item) => {
      const itemCat = item.tags.find(tag => isMainCategory(tag) || isAccessoryCategory(tag))

      if (mode === "alternatives") {
        return itemCat === currentCategory
      }

      if (mode === "accessories") {
        // Не выводим аксессуары к аксессуарам
        if (currentType !== "main") return false

        const allowed = ACCESSORY_BINDINGS[currentCategory] || []
        return isAccessoryCategory(itemCat) && allowed.includes(itemCat)
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
