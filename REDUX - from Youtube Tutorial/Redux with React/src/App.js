import './App.css';
import CakeContainer from './components/CakeCointainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HooksCakeContainer />
        <CakeContainer />
        <NewCakeContainer/>
        <IceCreamContainer/>
        <ItemContainer cake/>
        <ItemContainer/>
      </header>
    </div>
  );
}

export default App;
