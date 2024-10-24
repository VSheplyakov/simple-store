const sql = require("better-sqlite3");
const db = sql("phones.db");

const mobilePhones = [
  {
    id: 1,
    name: "Smartphone X1",
    slug: "smartphone-x1",
    description:
      "6.5-inch Super AMOLED display,Octa-core 2.9GHz processor,256GB internal storage,Triple rear cameras 64MP + 12MP + 5MP,5000mAh battery with fast charging",
    image: "/images/t1.jpg",
    price: 999.99,
  },
  {
    id: 2,
    name: "Mobile Pro S",
    slug: "mobile-pro-s",
    description:
      "6.1-inch Liquid Retina display,Hexa-core 2.7GHz processor,128GB internal storage,Dual 12MP camera with night mode,3110mAh battery",
    image: "/images/t2.jpg",
    price: 899.99,
  },
  {
    id: 3,
    name: "Galaxy Neo",
    slug: "galaxy-neo",
    description:
      "6.4-inch Dynamic AMOLED display,Octa-core 2.8GHz processor,512GB internal storage,Quad rear cameras 108MP + 12MP + 10MP + 10MP,4500mAh battery with wireless charging",
    image: "/images/t3.jpg",
    price: 1199.99,
  },
  {
    id: 4,
    name: "Pixel Max",
    slug: "pixel-max",
    description:
      "6.0-inch OLED display,Octa-core 2.4GHz processor,128GB internal storage,Dual 12.2MP camera,3700mAh battery with fast charging",
    image: "/images/t4.jpg",
    price: 799.99,
  },
  {
    id: 5,
    name: "OnePlus Z",
    slug: "oneplus-z",
    description:
      "6.55-inch Fluid AMOLED display with 90Hz refresh rate,Octa-core 2.86GHz processor,256GB internal storage,Triple rear cameras 48MP + 16MP + 2MP,4300mAh battery with Warp Charge 30T",
    image: "/images/t5.jpg",
    price: 699.99,
  },
  {
    id: 6,
    name: "Moto Edge",
    slug: "moto-edge",
    description:
      "6.7-inch OLED display with 90Hz refresh rate,Octa-core 2.2GHz processor,128GB internal storage,Triple rear cameras 64MP + 8MP + 16MP,4500mAh battery with TurboPower charging",
    image: "/images/t6.jpg",
    price: 649.99,
  },
  {
    id: 7,
    name: "Nokia PureView",
    slug: "nokia-pureview",
    description:
      "6.18-inch IPS LCD display,Octa-core 2.0GHz processor,128GB internal storage,Five rear 12MP cameras,3320mAh battery",
    image: "/images/t7.jpg",
    price: 549.99,
  },
  {
    id: 8,
    name: "Xperia Ultra",
    slug: "xperia-ultra",
    description:
      "6.5-inch 4K OLED display,Octa-core 2.84GHz processor,256GB internal storage,Triple rear cameras 12MP + 12MP + 12MP,4000mAh battery with fast charging",
    image: "/images/t8.jpg",
    price: 949.99,
  },
  {
    id: 9,
    name: "LG Velvet",
    slug: "lg-velvet",
    description:
      "6.8-inch P-OLED display,Octa-core 2.0GHz processor,128GB internal storage,Triple rear cameras 48MP + 8MP + 5MP,4300mAh battery with fast and wireless charging",
    image: "/images/t9.jpg",
    price: 599.99,
  },
  {
    id: 10,
    name: "Huawei P Smart",
    slug: "huawei-p-smart",
    description:
      "6.21-inch LTPS IPS LCD display,Octa-core 2.2GHz processor,64GB internal storage,Dual rear cameras 13MP + 2MP,3400mAh battery",
    image: "/images/t10.jpg",
    price: 299.99,
  },
  {
    id: 11,
    name: "Oppo Find X2",
    slug: "oppo-find-x2",
    description:
      "6.7-inch AMOLED display with 120Hz refresh rate,Octa-core 2.84GHz processor,512GB internal storage,Triple rear cameras 48MP + 13MP + 12MP,4200mAh battery with SuperVOOC 2.0",
    image: "/images/t11.jpg",
    price: 1099.99,
  },
  {
    id: 12,
    name: "Realme XT",
    slug: "realme-xt",
    description:
      "6.4-inch Super AMOLED display,Octa-core 2.3GHz processor,128GB internal storage,Quad rear cameras 64MP + 8MP + 2MP + 2MP,4000mAh battery with VOOC 3.0",
    image: "/images/t12.jpg",
    price: 399.99,
  },
  {
    id: 13,
    name: "Vivo Nex 3",
    slug: "vivo-nex-3",
    description:
      "6.89-inch Super AMOLED display,Octa-core 2.96GHz processor,256GB internal storage,Triple rear cameras 64MP + 13MP + 13MP,4500mAh battery with fast charging",
    image: "/images/t13.jpg",
    price: 799.99,
  },
  {
    id: 14,
    name: "Asus ROG Phone 3",
    slug: "asus-rog-phone-3",
    description:
      "6.59-inch AMOLED display with 144Hz refresh rate,Octa-core 3.1GHz processor,512GB internal storage,Triple rear cameras 64MP + 13MP + 5MP,6000mAh battery with fast charging",
    image: "/images/t14.jpg",
    price: 1299.99,
  },
  {
    id: 15,
    name: "BlackBerry Key3",
    slug: "blackberry-key3",
    description:
      "4.5-inch IPS LCD display,Octa-core 2.2GHz processor,128GB internal storage,Dual rear cameras 12MP + 8MP,3500mAh battery",
    image: "/images/t15.jpg",
    price: 649.99,
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS phones (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL,
       slug TEXT NOT NULL UNIQUE,
       description TEXT NOT NULL,
       image TEXT NOT NULL,
       price NUMBER NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO phones VALUES (
         null,
         @name,
         @slug,
         @description,
         @image,
         @price
      )
   `);

  for (const phone of mobilePhones) {
    stmt.run(phone);
  }
}

initData();
