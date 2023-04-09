import styles from "./Header.module.scss";
import { Link } from "react-router-dom";


function Header(props) {
  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.logo}>
          <img
            className="mr-15"
            width={40}
            height={40}
            src="/img/logo.png"
            alt="LogoShop"
          />
          <div>
            <h3>Gadget store</h3>
            <p className={styles.title}>Магазин гаджетов и телефонов</p>
          </div>
        </div>
      </Link>
      <ul className={styles.headerRight}>
        <li className={styles.balance} onClick={props.onClickCart}>
          <img width={28} height={28} src="/img/cart.svg" alt="totalPrice" />
          <span>12333грн</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              width={24}
              height={24}
              src="/img/fill-heart.svg"
              alt="arrowLinks"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
