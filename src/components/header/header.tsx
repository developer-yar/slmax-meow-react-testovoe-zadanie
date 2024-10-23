import Link from "next/link";
import styles from "./header.module.scss";

export const Header = (): JSX.Element => (
  <>
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          <Link href="/">Internet Shop</Link>
        </h1>
        <nav>
          <ul className={styles.menu}>
            <li className={styles.item}>
              <Link href="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </>
);
