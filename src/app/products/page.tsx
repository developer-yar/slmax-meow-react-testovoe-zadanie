import { Products } from "@/components/products/products";
import { Title } from "@/components/title/title";
import { getProductsFromAPI } from "@/functions/getProductsFromAPI";
import { IProduct } from "@/types/product";

export default async function ProductsPage() {
  const products: IProduct[] = await getProductsFromAPI();
  return (
    <>
      <Title text="Product list" />
      <Products products={products} />
    </>
  );
}
