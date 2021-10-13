import "./App.css";
import NavBar from "./components/navbar/navbar";
import { MainComponent } from "./Global.style";
import Home from "./screens/home/home";
import { Switch } from "react-router";
import { Route } from "react-router";
import Product from "./screens/product/product";
import Cart from "./screens/cart/cart";
import Payment from "./screens/address/payment";
import Footer from "./components/footer/footer";

function App() {
  return (
    <MainComponent>
      <NavBar />
      <Switch>
        <Route exact={true} path={"/"} component={Home} />,
        <Route exact={true} path={"/product/:id"} component={Product} />,
        <Route exact={true} path={"/cart"} component={Cart} />,
        <Route
          path={"/proceed-checkout/shipping-address"}
          component={Payment}
        /> 
        
        ,
        <Route path={"/proceed-checkout/place-order"} component={Payment} />
      </Switch>
      <Footer/>
    </MainComponent>
  );
}

export default App;
