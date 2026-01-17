import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";

import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AddService from "./admin/AddService";
import AdminLayout from "./admin/AdminLayout";
import ManageServices from "./admin/ManageServices";
import EditService from "./admin/EditService";
import PublicLayout from "./layouts/PublicLayout";
import ServiceDetail from "./pages/ServiceDetail";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {



  return (
    <Router>
      <ScrollToTop />
      <Routes>

        {/* Public */}
        <Route element={<PublicLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Admin */}
        <Route path="/admin/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >

          <Route index element={<Navigate to="dashboard" replace />} />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-service" element={<AddService />} />
          <Route path="manage-services" element={<ManageServices />} />
          <Route path="edit-service/:id" element={<EditService />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  )
}

export default App