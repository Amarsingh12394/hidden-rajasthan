import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import AdminLayout from '../layouts/AdminLayout'
import SupplierLayout from '../layouts/SupplierLayout'
import Favorites from '../pages/Favorites/Favorites'

// Public pages
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Shop from '../pages/Shop/Shop'
import Categories from '../pages/Categories/Categories'
import ProductDetails from '../pages/ProductDetails/ProductDetails'
import Cart from '../pages/Cart/Cart'
import Checkout from '../pages/Checkout/Checkout'
import BulkOrders from '../pages/B2B/BulkOrders'
import BecomeSupplier from '../pages/Supplier/BecomeSupplier'
import Contact from '../pages/Contact/Contact'
import Login from '../pages/Login/Login'
import NotFound from '../pages/NotFound/NotFound'

// Admin pages
import AdminDashboard from '../pages/Admin/AdminDashboard'
import ManageProducts from '../pages/Admin/ManageProducts'
import ManageSuppliers from '../pages/Admin/ManageSuppliers'
import ManageUsers from '../pages/Admin/ManageUsers'

// Supplier pages
import SupplierDashboard from '../pages/Supplier/SupplierDashboard'
import MyProducts from '../pages/Supplier/MyProducts'

import ProtectedRoute from '../components/ProtectedRoute' // we'll create this

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes with MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/b2b" element={<BulkOrders />} />
        <Route path="/become-supplier" element={<BecomeSupplier />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Admin routes with AdminLayout */}
      <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<ManageProducts />} />
          <Route path="/admin/suppliers" element={<ManageSuppliers />} />
          <Route path="/admin/users" element={<ManageUsers />} />
        </Route>
      </Route>

      {/* Supplier routes with SupplierLayout */}
      <Route element={<ProtectedRoute allowedRoles={['supplier']} />}>
        <Route element={<SupplierLayout />}>
          <Route path="/supplier/dashboard" element={<SupplierDashboard />} />
          <Route path="/supplier/products" element={<MyProducts />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes