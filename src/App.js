import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header />
      <div className="content p-40">
        <div className="d-flex justify-between pl-20 pr-20 align-center mb-40">
          <h1 className="">Весь товар</h1>
          <div className="searchBlock align-center d-flex">
            <img width={13} height={13} src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." className="searchBlock__search" />
          </div>
        </div>
        <div className="product-card__wrapper">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

        </div>
      </div>
    </div>
  );
}

export default App;
