import Layout from './layout/Layout';
import { Switch, Route, Redirect } from 'react-router-dom';

import AddQuote from './pages/AddQuote';
import AllQuotes from './pages/AllQuotes';
import QuoteDetails from './pages/QuoteDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:id">
            <QuoteDetails />
          </Route>
          <Route path="/add-quote">
            <AddQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
