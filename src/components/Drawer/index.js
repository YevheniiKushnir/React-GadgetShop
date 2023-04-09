import React from "react";
import axios from "axios";
import styles from "./Drawer.module.scss";
import { modifyPrice } from "../ProductCard";

function Drawer({ onClose, items = [], onRemove, setCartItems }) {
  React.useEffect(() => {
    axios
      .get("https://642724e6161067a83bf656a5.mockapi.io/drawer")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className={styles.title}>
          Корзина
          <img
            onClick={onClose}
            width={22}
            height={22}
            src="/img/close.svg"
            alt="close"
          />
        </h2>
        {items.length > 0 ? (
          <div className={styles.wrapperCartItem}>
            <div className={styles.wrapperCartItem}>
              {items.map((obj) => (
                <div className={styles.cartItem} key={obj.id}>
                  <img height={100} src={obj.imgUrl} alt="Purchased product" />
                  <div className={styles.wrap}>
                    <h5>{obj.itemName}</h5>
                    <div className={styles.price}>
                      <span>Цена:</span>
                      <b>{modifyPrice(obj.price)}</b>
                    </div>
                  </div>
                  <button
                    className={styles.cancel}
                    onClick={() => onRemove(obj.id)}
                  >
                    <img
                      width={24}
                      height={24}
                      src="/img/remove.svg"
                      alt="Remove from Cart"
                    />
                  </button>
                </div>
              ))}
            </div>
            <div className={styles.cartTotalBlock}>
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>цена</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>ывы</b>
                </li>
              </ul>
              <button className={`mainButton ${styles.placeAnOrder}`}>
                Оформить заказ
                <img
                  width={18}
                  height={18}
                  src="/img/arrowLinks.svg"
                  alt="arrow"
                />
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.emptyDrawer}>
            <img src="/img/emptyCart.svg" alt="empty Cart" />
            <h3>У вас нету заказов</h3>
            <h5>Добавьте хоть одну еденицу товара, чтобы сделать заказ</h5>
            <button
              className={`mainButton ${styles.backToShop}`}
              onClick={onClose}
            >
              Назад в магазин
              <img
                width={18}
                height={18}
                src="/img/arrowLinks.svg"
                alt="arrow"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
