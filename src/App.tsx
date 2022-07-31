import HomePage from "./pages/HomePage";
import { Route, Switch } from "react-router-dom";
import routes from "./config/routeConstants";
import AddResourcesPage from "./pages/AddResourcesPage";
import { ToastContainer } from "react-toastify";
import LoginPage from "./pages/LoginPage";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Switch>
        <Route path={routes.login} component={LoginPage} />
        <ProtectedRoute exact path={routes.home} component={HomePage} />
        <ProtectedRoute
          exact
          path={routes.addResources}
          component={AddResourcesPage}
        />
        <ProtectedRoute component={NotFound} />
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
