
import { BrowserRouter as Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Search from './Components/Search';
import Footer from './Components/Shared/Footer';
import NavBar from './Components/Shared/Navbar';
import Faq from './Components/Footer/Faq';
import Terms from './Components/Footer/Terms';
import Support from './Components/Footer/support';
import News from './Components/News';
import Trending from './Components/Trending';
import Congress from './Components/Congress';
import StockLists from './Components/StockLists';
import Release from './Components/Footer/Release';
import Profile from './Components/Profile';
import Loading from "./Components/Shared/loading";
import ProtectedRoute from "./Auth/protected-route";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Switch>
      <div>
        <CssBaseline />
        <NavBar />
        <Route exact path='/' component={Search} />
        <ProtectedRoute exact path='/profile' component={Profile} />
        <ProtectedRoute exact path='/lists' component={StockLists} />
        <ProtectedRoute exact path='/faq' component={Faq} />
        <ProtectedRoute exact path='/release' component={Release} />
        <ProtectedRoute exact path='/terms' component={Terms} />
        <ProtectedRoute exact path='/support' component={Support} />
        <ProtectedRoute exact path='/news' component={News} />
        <ProtectedRoute exact path='/trending' component={Trending} />
        <ProtectedRoute exact path='/congress' component={Congress} />
        <Footer />
      </div>
    </Switch>
  );
}

export default App;
