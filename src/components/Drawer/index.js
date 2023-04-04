import styles from './Drawer.module.scss';
import { modifyPrice } from '../ProductCard'

function Drawer({onClose, items = []}) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className={styles.title}>Корзина
          <img onClick={onClose} width={22} height={22} src="/img/close.svg" alt="close" /></h2>
        <div className={styles.wrapperCartItem}>
          {items.map(({imgUrl, itemName, price}) => (
            <div className={styles.cartItem}>
              <img height={100} src={imgUrl} alt='Purchased product'/>
              <div className={styles.wrap}>
                <h5>{itemName}</h5>
                <div class={styles.price}>
                  <span>Цена:</span>
                  <b>{modifyPrice(price)}</b>
                </div>
              </div>
              <button className={styles.cancel}>
                <img width={24} height={24} src="/img/remove.svg" alt="Remove from Cart" />
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
          <button className={`mainButton ${styles.placeAnOrder}`}>Оформить заказ
            <img width={18} height={18} src="/img/arrowLinks.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Drawer;