import sql from "better-sqlite3";

const db = sql("phones.db");

export async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return db.prepare("SELECT * FROM phones").all();
}

export function getProduct(slug: string) {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return db.prepare("SELECT * FROM phones WHERE slug = ?").get(slug);
}
