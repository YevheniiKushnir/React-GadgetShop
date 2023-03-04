function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between	align-center p-40">
        <div className="d-flex align-center">
          <img className="mr-15" width={40} height={40} src="/img/logo.png" alt="LogoShop" />
          <div>
            <h3 className="text-uppercase">Gadget store</h3>
            <p className="opacity-8">Магазин гаджетов и телефонов</p>
          </div>
        </div>
        <ul className="headerRight d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/wallet.svg" alt="totalPrice" />
            <span>Price: </span>
          </li>
          <li>
            <img width={24} height={24} src="/img/cart.svg" alt="Cart" />

          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Весь товар</h1>
        <div className="d-flex gadgets-line justify-center">
          <div className="product-card d-flex flex-column">
              <img className="product-card__img" src="/img/itemPic/1.jpg" alt="Product"/>
              <h5 className="product-card__info ">Samsung Galaxy A73 2022 A736B 8/256GB Gray</h5>
              <div class="product-card__price d-flex justify-between ">
                <span class="product-card__text-of-price">Цена:</span>
                <b class="product-card__total-price">18 999 грн</b>
              </div>
              <button className="product-card__buy d-flex justify-around align-center">
                <img width={18} height={18} src="/img/add-cart.svg" alt="Add to Cart" />
                <span>Купить</span>
              </button>
              <button className="product-card__like">
                <img width={18} height={18} src="img/fill-heart.svg" alt="unlike/like Item" />
              </button>
          </div>
          <div className="product-card d-flex flex-column">
            <img className=" product-card__img" src="/img/itemPic/2.jpg" alt="Product" />
            <h5 className="product-card__info ">Readme 10 Pro Plus 5G 12/256GB (Dark Matter)</h5>
            <div class="product-card__price d-flex justify-between ">
              <span class="product-card__text-of-price">Цена:</span>
              <b class="product-card__total-price">17 999 грн</b>
            </div>
            <button className="product-card__buy d-flex justify-around align-center">
              <img width={18} height={18} src="/img/add-cart.svg" alt="Add to Cart" />
              <span>Купить</span>
            </button>
            <button className="product-card__like">
              <img width={18} height={18} src="img/fill-heart.svg" alt="unlike/like Item" />
            </button>
          </div>
          <div className="product-card d-flex flex-column">
            <img className=" product-card__img" src="/img/itemPic/3.jpg" alt="Product" />
            <h5 className="product-card__info ">OPPO A17k <br /> 3/64GB <br /> (Blue)</h5>
            <div class="product-card__price d-flex justify-between ">
              <span class="product-card__text-of-price">Цена:</span>
              <b class="product-card__total-price">4 499 грн</b>
            </div>
            <button className="product-card__buy d-flex justify-around align-center">
              <img width={18} height={18} src="/img/add-cart.svg" alt="Add to Cart" />
              <span>Купить</span>
            </button>
            <button className="product-card__like">
              <img width={18} height={18} src="img/fill-heart.svg" alt="unlike/like Item" />
            </button>
          </div>
          <div className="product-card d-flex flex-column">
            <img className=" product-card__img" src="/img/itemPic/4.jpg" alt="Product" />
            <h5 className="product-card__info ">Samsung Galaxy M33 2022 M336B 6/128GB Blue</h5>
            <div class="product-card__price d-flex justify-between ">
              <span class="product-card__text-of-price">Цена:</span>
              <b class="product-card__total-price">8 999 грн</b>
            </div>
            <button className="product-card__buy d-flex justify-around align-center">
              <img width={18} height={18} src="/img/add-cart.svg" alt="Add to Cart" />
              <span>Купить</span>
            </button>
            <button className="product-card__like">
              <img width={18} height={18} src="img/fill-heart.svg" alt="unlike/like Item" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
