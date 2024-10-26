import { supabase } from "../supsbaseClient";
// import sql from "better-sqlite3";

// const db = sql("phones.db");

// export async function getProducts() {
//   await new Promise((resolve) => setTimeout(resolve, 100));
//   return db.prepare("SELECT * FROM phones").all();
// }

// export async function getProduct(slug: string) {
//   await new Promise((resolve) => setTimeout(resolve, 100));
//   return db.prepare("SELECT * FROM phones WHERE slug = ?").get(slug);
// }

export async function getProducts() {
  const { data, error } = await supabase.from("simplestore").select("*");
  if (error) throw error;
  return data;
}

export async function getProduct(slug: string) {
  const { data, error } = await supabase
    .from("simplestore")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error) throw error;
  return data;
}
