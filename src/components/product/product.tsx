import Link from "next/link";
import { IProduct } from "@/types/product";
import styles from "./product.module.scss";

export const Product = ({ product }: { product: IProduct }): JSX.Element => (
  <div className={styles.product} key={product.id}>
    <h2 className={styles.title}>
      <Link href={`/products/${product.id}`}>{product.title}</Link>
    </h2>
    <p className={styles.price}>{product.price} $</p>
    <p className={styles.category}>{product.category}</p>
    <p className={styles.description}>{product.description}</p>
  </div>
);
