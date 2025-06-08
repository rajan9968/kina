import './App.css';
import $ from 'jquery';

import UserLayout from './Components/UserLayout';
import AdminLayout from './Components/AdminLayout';

import Homepage from './Components/Home/Homepage';
import AboutPage from './Components/About/AboutPage';
import ContactPage from './Components/Contact/ContactPage';
import GalleryPage from './Components/Gallery/GalleryPage';
import ProductPage from './Components/Product/ProductPage';
import Wishlist from './Components/CartsPage/Wishlist';
import SignUp from './Components/AuthUser/SignUp';
import SignIn from './Components/AuthUser/SignIn';
import Cart from './Components/CartsPage/Cart';
import BlogList from './Components/Blog/BlogList';
// Admin 
import AdminLogin from './Components/Admin/Login';
import AdminDashboard from './Components/Admin/Dashboard';
import AdminProduct from './Components/Admin/Product/Product';
import AdminAddProduct from './Components/Admin/Product/AddProduct';
import AdminEditProduct from './Components/Admin/Product/EditProduct';
// Banner 
import AdminBanner from './Components/Admin/Banner/Banner';
import AdminAddBanner from './Components/Admin/Banner/AddBanner';
import AdminEditBanner from './Components/Admin/Banner/EditBanner';
// category
import AdminCategory from './Components/Admin/Category/Categories';


// import { BrowserRouter, Route, Routes } from "react-router"
import { BrowserRouter, Route, Routes } from "react-router-dom"




function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* USER LAYOUT ROUTES */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Route>
        {/* ADMIN LAYOUT ROUTES */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<AdminProduct />} />
          <Route path="/admin/add-product" element={<AdminAddProduct />} />
          <Route path="/admin/edit-product/:productIds" element={<AdminEditProduct />} />
          <Route path="/admin/delete-product/:productIds" element={<AdminProduct />} />
          {/* Banner  */}
          <Route path="/admin/banner" element={<AdminBanner />} />
          <Route path="/admin/add-banner" element={<AdminAddBanner />} />
          <Route path="/admin/edit-banner/:bannerId" element={<AdminEditBanner />} />
          <Route path="/admin/delete-banner/:bannerId" element={<AdminBanner />} />
          {/* Category */}
          <Route path="/admin/categories" element={<AdminCategory />} />

        </Route>

        {/* Admin login without layout (optional) */}
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
