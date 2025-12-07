import {
  headerContainer,
  headerWrapper,
  navigation,
  navigationLink,
  title,
  metaBar,
} from "./style.css";

const Header = () => {
  return (
    <div className={headerWrapper}>
      <div className={headerContainer}>
        <h1 className={title}>Pixels / Pragmatism / Product</h1>

        <div className={metaBar}>
          <span>Vol. 1, No. 1</span>
          <span>Dohyun Ko's Journal</span>
          <span>Price: Free</span>
        </div>

        <div className={navigation}>
          <a className={navigationLink} href="/">
            Articles
          </a>
          <a
            className={navigationLink}
            href="/"
            style={{
              textDecoration: "line-through",
            }}
          >
            Projects
          </a>
          <a className={navigationLink} href="/about">
            About
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
