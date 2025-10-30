import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { SignIn } from "./pages/Auth/SignIn";
import { SignUp } from "./pages/Auth/SignUp";
import { Products } from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/shop" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
