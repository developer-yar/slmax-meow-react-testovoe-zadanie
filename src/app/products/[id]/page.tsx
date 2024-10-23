import { notFound } from "next/navigation";
import { Title } from "@/components/title/title";
import { getProductsFromAPI } from "@/functions/getProductsFromAPI";
import { path } from "@/types/path";

export async function generateStaticParams(): Promise<path[]> {
  const products = await getProductsFromAPI();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

async function getProduct(params: path) {
  const response = await fetch(`${process.env.API_URL}/products/${params.id}`, {
    next: { revalidate: 15 },
  });

  if (!response.ok) notFound();

  const product = await response.json();

  return product;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<path>;
}) {
  const product = await getProduct(await params);
  return <Title text={product.title}/>
}
