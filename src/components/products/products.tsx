import { Product } from "@/components/product/product";
import { IProduct } from "@/types/product";
import styles from "./products.module.scss";

export const Products = ({
  products,
}: {
  products: IProduct[];
}): JSX.Element => (
  <div className={styles.products}>
    {products.map((product: IProduct) => (
      <Product key={product.id} product={product} />
    ))}
  </div>
);
