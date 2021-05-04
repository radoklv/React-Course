import ItemsList from './components/Items/ItemsList';
import Header from './components/Header/Header'
import style from './App.module.css';

function App() {
  return (
    <div className="app">
      <div className={style['app-header']}>
        <Header></Header>
      </div>
      <div className={style['app-intro']}>
        <div className={style['app-intro-image']}></div>
      </div>
      <div className={style['app-body']}>
        <div className="container">
          <div className={style['app-body-intro']}>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              in doloribus sint debitis expedita, commodi nemo explicabo
              veritatis perferendis sunt cumque. Iure enim veritatis, itaque et
              voluptatibus assumenda distinctio repellendus animi, mollitia ad
            </p>
          </div>
          <div className="app-list">
            <ItemsList></ItemsList>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
