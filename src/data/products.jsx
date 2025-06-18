// Файл: src/data/products.jsx

const images = import.meta.glob('../assets/products/*.{jpg,png}', { eager: true, as: 'url' })

export const products = [
  {
    id: "product001",
    name: "Смартфон Apple iPhone 14 128GB",
    price: 79990,
    tags: ["смартфон", "apple", "ios", "черный", "до_80000", "nfc", "5g"],
    image: images["../assets/products/iphone14.jpg"]
  },
  {
    id: "product002",
    name: "Смартфон Samsung Galaxy A54 128GB",
    price: 35990,
    tags: ["смартфон", "samsung", "android", "белый", "до_40000", "nfc"],
    image: images["../assets/products/galaxy_a54.jpg"]
  },
  {
    id: "product003",
    name: "Смартфон Xiaomi Redmi Note 13 Pro",
    price: 29990,
    tags: ["смартфон", "xiaomi", "android", "синий", "до_30000", "nfc"],
    image: images["../assets/products/redmi_note13pro.jpg"]
  },
  {
    id: "product004",
    name: "Ноутбук Apple MacBook Pro 14 M3",
    price: 189990,
    tags: ["ноутбук", "apple", "до_200000", "ssd", "m3", "macos"],
    image: images["../assets/products/macbook_pro_m3.png"]
  },
  {
    id: "product005",
    name: "Ноутбук ASUS Vivobook 15 OLED",
    price: 59990,
    tags: ["ноутбук", "asus", "до_60000", "ssd", "oled", "i5"],
    image: images["../assets/products/asus_vivobook_oled.jpg"]
  },
  {
    id: "product006",
    name: "Ноутбук Lenovo IdeaPad 3",
    price: 47990,
    tags: ["ноутбук", "lenovo", "до_50000", "ssd", "i3"],
    image: images["../assets/products/lenovo_ideapad3.jpg"]
  },
  {
    id: "product007",
    name: "Планшет Apple iPad Air 2022",
    price: 65990,
    tags: ["планшет", "apple", "до_70000", "ios", "серый"],
    image: images["../assets/products/ipad_air_2022.jpg"]
  },
  {
    id: "product008",
    name: "Планшет Xiaomi Pad 6 128GB",
    price: 32990,
    tags: ["планшет", "xiaomi", "до_35000", "android", "черный"],
    image: images["../assets/products/xiaomi_pad6.jpg"]
  },
  {
    id: "product009",
    name: "Умные часы Huawei Watch GT 4",
    price: 18990,
    tags: ["умные_часы", "huawei", "до_20000", "gps", "пульс", "зеленый"],
    image: images["../assets/products/huawei_gt4.jpg"]
  },
  {
    id: "product010",
    name: "Умные часы Amazfit GTS 4",
    price: 16990,
    tags: ["умные_часы", "amazfit", "до_20000", "gps", "водостойкие", "черный"],
    image: images["../assets/products/amazfit_gts4.jpg"]
  },
  {
    id: "product011",
    name: "Наушники JBL Tune 760NC",
    price: 8990,
    tags: ["наушники", "jbl", "до_10000", "bluetooth", "шумоподавление", "синий"],
    image: images["../assets/products/jbl_760nc.jpg"]
  },
  {
    id: "product012",
    name: "Наушники Sony WF-1000XM5",
    price: 31990,
    tags: ["наушники", "sony", "до_35000", "беспроводные", "шумоподавление", "черный"],
    image: images["../assets/products/sony_wf1000xm5.jpg"]
  },
  {
    id: "product013",
    name: "Монитор ASUS TUF Gaming VG249Q",
    price: 23990,
    tags: ["монитор", "asus", "до_25000", "24_дюйма", "ips", "144hz"],
    image: images["../assets/products/asus_tuf_vg249q.jpg"]
  },
  {
    id: "product014",
    name: "Монитор LG 32UN650-W 32 4K",
    price: 39990,
    tags: ["монитор", "lg", "до_40000", "4k", "32_дюйма", "ips"],
    image: images["../assets/products/lg_32un650.jpg"]
  },
  {
    id: "product015",
    name: "Колонка JBL Flip 6",
    price: 10990,
    tags: ["акустика", "jbl", "до_12000", "bluetooth", "водостойкие", "черный"],
    image: images["../assets/products/jbl_flip6.jpg"]
  },
  {
    id: "product016",
    name: "Колонка Sony SRS-XE200",
    price: 11990,
    tags: ["акустика", "sony", "до_12000", "bluetooth", "водостойкие", "синий"],
    image: images["../assets/products/sony_srs_xe200.jpg"]
  },
  {
    id: "product017",
    name: "SSD Kingston NV2 1TB",
    price: 7490,
    tags: ["накопитель", "kingston", "до_8000", "nvme", "1tb"],
    image: images["../assets/products/kingston_nv2.jpg"]
  },
  {
    id: "product018",
    name: "Видеокарта ASUS Dual GeForce RTX 4060",
    price: 39990,
    tags: ["видеокарта", "asus", "до_40000", "rtx4060", "geforce"],
    image: images["../assets/products/asus_rtx4060.jpg"]
  },
  {
    id: "product019",
    name: "Видеокарта MSI GeForce RTX 4070",
    price: 72990,
    tags: ["видеокарта", "msi", "до_75000", "rtx4070", "geforce"],
    image: images["../assets/products/msi_rtx4070.jpg"]
  },
  {
    id: "product020",
    name: "Клавиатура Logitech MX Keys",
    price: 13990,
    tags: ["клавиатура", "logitech", "до_15000", "беспроводная", "подсветка"],
    image: images["../assets/products/logitech_mx_keys.jpg"]
  },
  {
    id: "product021",
    name: "Мышь Logitech MX Master 3S",
    price: 10990,
    tags: ["мышь", "logitech", "до_12000", "беспроводная", "тихие_кнопки"],
    image: images["../assets/products/logitech_mx_master3s.jpg"]
  },
  {
    id: "product022",
    name: "Смарт-ТВ Xiaomi Mi TV A2 43",
    price: 27990,
    tags: ["телевизор", "xiaomi", "до_30000", "smart_tv", "43_дюйма"],
    image: images["../assets/products/mi_tv_a2_43.jpg"]
  },
  {
    id: "product023",
    name: "Телевизор Samsung UE55CU7100U 55",
    price: 51990,
    tags: ["телевизор", "samsung", "до_55000", "smart_tv", "4k", "55_дюйма"],
    image: images["../assets/products/samsung_ue55cu7100.jpg"]
  },
  {
    id: "product024",
    name: "Внешний HDD Seagate 2TB",
    price: 6590,
    tags: ["накопитель", "seagate", "до_7000", "hdd", "2tb", "usb"],
    image: images["../assets/products/seagate_2tb.jpg"]
  },
  {
    id: "product025",
    name: "Маршрутизатор TP-Link Archer AX23",
    price: 4490,
    tags: ["роутер", "tplink", "до_5000", "wi-fi6", "двухдиапазонный"],
    image: images["../assets/products/tplink_ax23.jpg"]
  },
  {
    id: "product026",
    name: "МФУ HP Laser MFP 135a",
    price: 16990,
    tags: ["принтер", "hp", "до_20000", "лазерный", "мфу"],
    image: images["../assets/products/hp_135a.jpg"]
  },
  {
    id: "product027",
    name: "Пылесос Roborock S8",
    price: 59990,
    tags: ["пылесос", "roborock", "до_60000", "робот", "сухая_и_влажная"],
    image: images["../assets/products/roborock_s8.jpg"]
  },
  {
    id: "product028",
    name: "Веб-камера Logitech C920",
    price: 7990,
    tags: ["камера", "logitech", "до_8000", "hd", "встроенный_микрофон"],
    image: images["../assets/products/logitech_c920.jpg"]
  },
  {
    id: "product029",
    name: "Кулер для процессора DeepCool AK400",
    price: 3590,
    tags: ["кулер", "deepcool", "до_4000", "120мм", "тихий"],
    image: images["../assets/products/deepcool_ak400.jpg"]
  },
  {
    id: "product030",
    name: "Корпус ПК Zalman T7",
    price: 3490,
    tags: ["корпус", "zalman", "до_4000", "mid_tower", "atx"],
    image: images["../assets/products/zalman_t7.jpg"]
  },
]
