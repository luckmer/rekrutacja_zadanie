import NavBar from "./components/NavBar";
import fetchApi from "./Api/fetchApi";
import { useLocation, Switch, Route } from "react-router-dom";
import { routes } from "./routes/Index";
import "./css/App.css";

const App = () => {
  const location = useLocation();
  fetchApi();

  return (
    <main className="container">
      <NavBar />
      <Switch location={location} key={location.pathname}>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path} component={Component} />
        ))}
      </Switch>
    </main>
  );
};

export default App;
