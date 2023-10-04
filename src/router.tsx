import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ProductForm from "./pages/ProductForm";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="ProductForm" element={<ProductForm />} />
      <Route path="edit/:id" element={<ProductForm />} />
    </Routes>
  );
};

export default router;
