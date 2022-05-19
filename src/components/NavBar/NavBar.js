import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav>
      <div className={styles.wrapper}>
        <i className="fa fa-rocket"></i>
        <ul className={styles.navMenu}>
          <li>Home</li>
          <li>Favourite</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
