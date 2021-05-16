import { Switch, Route } from 'react-router-dom';

import Navigation from './components/nav/Navigation';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Product from './pages/Product';

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/products/:id">
          <Product />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
