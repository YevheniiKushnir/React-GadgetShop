function Drawer() {
  return (
    <div className="overlay" style={{ display: "none" }}>
      <div className="drawer p-30 d-flex flex-column">
        <h2 className="drawer__title">Корзина <img width={22} height={22} src="/img/close.svg" alt="close" /></h2>
        <div className="cartItem-wrapper d-flex flex-column">
          <div className="cartItem d-flex align-center">
            <img height={100} className="cartItem__img" src="/img/itemPic/1.jpg" alt="Product" />
            <div className="d-flex flex-column justify-between cartItem__wrap">
              <h5 className="cartItem__info ">Samsung Galaxy A73 2022 A736B 8/256GB Gray</h5>
              <div class="cartItem__price d-flex justify-between">
                <span class="cartItem__text-of-price">Цена:</span>
                <b class="cartItem__total-price">18 999 грн</b>
              </div>
            </div>
            <button className="cartItem__cancel">
              <img width={24} height={24} src="/img/remove.svg" alt="Remove from Cart" />
            </button>
          </div>
          <div className="cartItem d-flex align-center">
            <img height={100} className="cartItem__img" src="/img/itemPic/1.jpg" alt="Product" />
            <div className="d-flex flex-column justify-between cartItem__wrap">
              <h5 className="cartItem__info ">Samsung Galaxy A73 2022 A736B 8/256GB Gray</h5>
              <div class="cartItem__price d-flex justify-between">
                <span class="cartItem__text-of-price">Цена:</span>
                <b class="cartItem__total-price">18 999 грн</b>
              </div>
            </div>
            <button className="cartItem__cancel">
              <img width={24} height={24} src="/img/remove.svg" alt="Remove from Cart" />
            </button>
          </div>
        </div>
        <div className="cartTotalBlock">
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
          <button className="mainButton">Оформить заказ <img width={18} height={18} src="/img/arrowLinks.svg" alt="arrow" /></button>
        </div>
      </div>
    </div>
  )
}

export default Drawer;