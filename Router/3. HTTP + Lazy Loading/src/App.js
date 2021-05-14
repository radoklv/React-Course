import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const Quotes = React.lazy(() => import('./pages/Quotes'));
const AddQuote = React.lazy(() => import('./pages/AddQuote'));
const QuoteDetails = React.lazy(() => import('./pages/QuoteDetails'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <div>
      <main>
        <Layout>
          <Suspense
            fallback={
              <div className="centered">
                <LoadingSpinner />
              </div>
            }
          >
            {/* Suspense is for Lazy Loading*/}
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
          </Suspense>
        </Layout>
      </main>
    </div>
  );
}

export default App;
