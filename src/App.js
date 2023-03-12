import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    itemName: 'Samsung Galaxy A73 2022 A736B 8/256GB Gray',
    price: 18999,
    imgUrl: '/img/itemPic/1.jpg',
  },
  {
    itemName: 'Readme 10 Pro Plus 5G 12/256GB (Dark Matter)',
    price: 17999,
    imgUrl: '/img/itemPic/2.jpg',
  },
  {
    itemName: 'Samsung Galaxy M33 2022 M336B 6/128GB Blue',
    price: 8999,
    imgUrl: '/img/itemPic/4.jpg',
  },
  {
    itemName: 'OPPO A17k 3/64GB (Blue)',
    price: 4499,
    imgUrl: '/img/itemPic/3.jpg',
  },
  {
    itemName: 'Apple iPhone 11 128Gb Black (MHDH3) Slim Box',
    price: 25499,
    imgUrl: '/img/itemPic/5.jpg',
  },
  {
    itemName: 'Readme 10 4G 8/128GB (Rush Black)',
    price: 10499,
    imgUrl: '/img/itemPic/6.jpg',
  },
  {
    itemName: 'OPPO A57s 4/64GB (Starry Black)',
    price: 6399,
    imgUrl: '/img/itemPic/7.jpg',
  },
  {
    itemName: 'Readme C30s 4/64GB (Stripe Blue)',
    price: 4799,
    imgUrl: '/img/itemPic/8.jpg',
  },
  {
    itemName: 'Samsung Galaxy Flip 4 F721B 2022 8/256GB Blue',
    price: 38699,
    imgUrl: '/img/itemPic/9.jpg',
  },
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex justify-between pl-20 pr-20 align-center mb-40">
          <h1 className="">Весь товар</h1>
          <div className="searchBlock align-center d-flex">
            <img width={13} height={13} src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." className="searchBlock__search" />
          </div>
        </div>
        <div className="wrapperProductCard">
          {
            arr.map(obj => (
              <ProductCard
                itemName={obj.itemName}
                price={obj.price}
                imgUrl={obj.imgUrl} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
