import styles from './ProductCard.module.scss';
console.log(styles)

function ProductCard(props) {
  const modifyPrice = (props) => {
    return props.price >= 100 ? props.price.toLocaleString().replace(",", " ") : props.price
  }

  return (
    <div className={styles.productCard}>
      <img className={styles.cardImg} src={props.imgUrl} alt="Product" />
      <h5 className={styles.cardTitle}>{props.itemName}</h5>
      <div class={styles.cardPrice}>
        <span>Цена:</span>
        <b>{modifyPrice(props)} грн</b>
      </div>
      <button className={styles.buyBtn}>
        <img width={18} height={18} src="/img/add-cart.svg" alt="Add to Cart" />
        <span>Купить</span>
      </button>
      <button className={styles.likeUnlike}>
        <img width={18} height={18} src="img/fill-heart.svg" alt="unlike/like Item" />
      </button>
    </div>
  )
}

export default ProductCard;
