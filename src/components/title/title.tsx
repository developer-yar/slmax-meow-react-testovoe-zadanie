import styles from "./title.module.scss";

export const Title = ({ text }: { text: string }): JSX.Element => (
  <h1 className={styles.title}>{text}</h1>
);
