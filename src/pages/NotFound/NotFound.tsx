import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.text}>404 | Page not found</h2>
    </div>
  );
};

export { NotFound };
