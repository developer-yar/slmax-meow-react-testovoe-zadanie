import { IProduct } from "@/types/product";

export async function getProductsFromAPI(): Promise<IProduct[]> {
  const response = await fetch(`${process.env.API_URL}/products`, {
    next: { revalidate: 15 },
  });

  if (!response.ok) {
    throw new Error("An unexpected error has occuried");
  }

  const products: IProduct[] = await response.json();

  return products;
}
