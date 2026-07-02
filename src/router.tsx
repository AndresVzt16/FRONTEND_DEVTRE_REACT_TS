import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./views/public/LoginView/LoginView";
import RegisterView from "./views/public/RegisterView/RegisterView";
import AuthLayout from "./layouts/Public/AuthLayout";
import PrivateLayout from "./layouts/Private/PrivateLayout";
import LinkTreeView from "./views/private/LinkTreeView/LinkTreeView";
import ProfileView from "./views/private/ProfileView/ProfileView";
import AccountConfirm from "./views/public/AccountConfirm/AccountConfirm";
import Profile from "./views/public/Profile/Profile";
import NotFoundView from "./views/public/NotFoundViews/NotFoundView";
import HomeView from "./views/public/HomeView/HomeView";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<HomeView/>} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/confirm-account/:token" element={<AccountConfirm />} />
        </Route>

        {/* Private Routes */}
        <Route path="/admin" element={<PrivateLayout />}>
          <Route index={true} element={<ProfileView />} />
          <Route path="links" element={<LinkTreeView />} />
        </Route>

        {/* Dinamics Routes */}
        <Route path="/:handle" element={<AuthLayout />}>
          <Route element={<Profile />} index={true} />
        </Route>

        <Route path="/404" element={<AuthLayout/>}>
          <Route element={<NotFoundView/>} index={true} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
