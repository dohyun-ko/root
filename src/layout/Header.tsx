import {
  headerContainer,
  headerWrapper,
  navigation,
  navigationLink,
  title,
} from "./style.css";

const Header = () => {
  return (
    <div className={headerWrapper}>
      <div className={headerContainer}>
        <h1 className={title}>Dohyun Ko</h1>

        <div className={navigation}>
          <a className={navigationLink} href="/">
            Articles
          </a>
          <a className={navigationLink} href="/">
            Projects
          </a>
          <a className={navigationLink} href="/">
            About
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
