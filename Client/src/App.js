import { Routes, Route } from "react-router-dom";
import Account from "./component/Account";
import "./App.css";
import Home from "./component/Home";
import Reset from "./component/Reset";
import PopUp from "./component/PopUp";
import DashboardApp from "./DashboardFile/DashboardApp";
import Verification from "./component/Verification";
import Admin from "./component/Admin";
import Product from "./component/Product";
function App() {
  return (
    <>
      {/* <Graph /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Account />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<PopUp />} />
        <Route path="/reset-password" element={<Reset />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <DashboardApp />
    </>
  );
}

export default App;
