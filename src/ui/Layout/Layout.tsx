import { ComponentPropsWithoutRef } from "react";

import styles from "./Layout.module.scss";

interface LayoutProps extends ComponentPropsWithoutRef<"div"> {}

const Layout = ({ children }: LayoutProps) => {
  return <div className={styles.layout}>{children}</div>;
};

export { Layout };
