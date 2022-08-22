import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import SharedLayout from "./Components/SharedLayout";
import SingleProducts from "./Components/SingleProducts";
import Dashboard from "./Components/Dashboard";
import LoginPage from "./Components/LoginPage";
import Protectedroute from "./Components/Protectedroute";
import Logout from "./Components/Logout";
import Error from "./Components/Error";
import "./App.css";


function App() {
const [user, setUser]= useState(null);

console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout user={user} setUser={setUser}/>}>
            <Route index element={<Home />}></Route>
            <Route path="About" element={<About />}></Route>
            <Route path="Logout" element={<Logout setUser={setUser} />}></Route>
            {user!==null && <Route path="Product" element={<Protectedroute user={user}>
            <Product /></Protectedroute>}></Route>}
            <Route path="LoginPage" element={<LoginPage setUser={setUser} />}></Route>
            {user !==null && <Route path="Dashboard" element={<Protectedroute user={user}>
              <Dashboard user={user}/>
              </Protectedroute>}></Route>}
            <Route path="product/:productId" element={<SingleProducts />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
