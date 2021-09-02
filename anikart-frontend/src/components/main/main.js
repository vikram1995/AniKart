
import Navbar from '../navbar/navbar';
import Login from '../login/login';
import './main.css';
import {ProtectedPage, PublicPage , PrivateRoute,ProvideAuth} from '../auth/auth'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Main() {
  return (
    <div  className="main-container">
     
      <ProvideAuth>
            <Router>
            <Navbar></Navbar>
                <div>
                    <Switch>
                    <Route exact path="/">
                           <h1>home</h1>
                        </Route>
                        <Route path="/public">
                            <PublicPage />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <PrivateRoute path="/protected">
                            <ProtectedPage />
                        </PrivateRoute>
                    </Switch>
                </div>
            </Router>
        </ProvideAuth>

    </div>
      
     
  );
}

export default Main;
