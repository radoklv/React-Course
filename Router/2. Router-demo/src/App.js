import { Route, Switch, Redirect } from 'react-router-dom';
import Quotes from './pages/Quotes';
import QuoteDetails from './pages/QuoteDetails';
import AddQuote from './pages/AddQuote';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <main>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/quotes" />
            </Route>
            <Route path="/quotes" exact>
              <Quotes />
            </Route>
            <Route path="/quotes/:id">
              <QuoteDetails />
            </Route>
            <Route path="/new-quote">
              <AddQuote />
            </Route>
            <Route path="*">
              <NotFound /> 
            </Route>
          </Switch>
        </Layout>
      </main>
    </div>
  );
}

export default App;
