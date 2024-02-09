const API_URL = "https://fakestoreapi.com/products";

export async function getProducts() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed fetching products!");

  const data = await res.json();

  return data;
}
