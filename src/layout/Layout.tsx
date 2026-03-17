import * as styles from "./style.css";

const Layout = ({ children }: React.PropsWithChildren) => {
  return <div className={styles.layoutContainer}>{children}</div>;
};

export default Layout;
