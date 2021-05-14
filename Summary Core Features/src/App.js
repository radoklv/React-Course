import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import AllMeetups from './pages/AllMeetups';
import Favourites from './pages/Favourites';
import NewMeetup from './pages/NewMeetup';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetups />
          </Route>
          <Route path="/new-meetup">
            <NewMeetup />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
