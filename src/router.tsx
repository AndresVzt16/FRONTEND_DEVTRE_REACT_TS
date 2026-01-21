import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./views/public/LoginView";
import RegisterView from "./views/public/RegisterView";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import LinkTreeView from "./views/private/LinkTreeView";
import ProfileView from "./views/private/ProfileView";
import AccountConfirm from "./views/public/AccountConfirm";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/confirm-account/:token" element={<AccountConfirm />} />
          

        </Route>
        <Route path="/admin" element={<AppLayout />}>
          <Route index={true} element={<LinkTreeView />} />
          <Route path="profile" element={<ProfileView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
