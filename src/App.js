import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Header from "./header/header";
import Accueil from "./accuiel/acceuil";
import ProductDetails from "./accuiel/productDetail/productDetail";

function App() {
  return (
    <div className="App">
       <Router>
      <Header/>
      <Switch>
      <Route path="/" exact component={Accueil}/>
      <Route path="/product/:productId" exact component={ProductDetails}/>
      <Route>404 NNot Found !</Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
