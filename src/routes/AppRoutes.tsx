// src/routes/AppRoutes.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../features/dashboard/Dashboard";
import NotFound from "../features/not-found/NotFound";
import Login from "../features/login/Login";
import Main from "../features/main/Main";
import { Profile } from "../features/profile/Profile";
import Appointments from "../features/appointment/Appointments";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Main />}>
          <Route path="appointment" element={<Appointments />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
