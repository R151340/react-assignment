import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./config/routeConstants";
import AddResourcesPage from "./pages/AddResourcesPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.addResources} component={AddResourcesPage} />
      </Switch>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
