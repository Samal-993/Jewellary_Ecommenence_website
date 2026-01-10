import { Route, Routes } from "react-router-dom";

import Home from "./Path/Home";
import Jewellery from "./Pages/Jewellery";
import Product from "./Pages/Product";
import BuyItem from "./Pages/BuyItem";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/payment" element={<BuyItem />} />
      </Routes>
    </div>
  );
};

export default App;

