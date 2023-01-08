import { Routes, Route } from "react-router-dom";
import {
  SharedLayout,
  Home,
  About,
  Cart,
  Products,
  SingleProduct,
  Checkout,
  Error,
} from "./routes/index.route";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<SingleProduct />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
