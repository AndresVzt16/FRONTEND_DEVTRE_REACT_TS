import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./views/public/LoginView/LoginView";
import RegisterView from "./views/public/RegisterView/RegisterView";
import AuthLayout from "./layouts/Public/AuthLayout";
import PrivateLayout from "./layouts/Private/PrivateLayout";
import LinkTreeView from "./views/private/LinkTreeView/LinkTreeView";
import ProfileView from "./views/private/ProfileView/ProfileView";
import AccountConfirm from "./views/public/AccountConfirm/AccountConfirm";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/confirm-account/:token" element={<AccountConfirm />} />
        </Route>
        <Route path="/admin" element={<PrivateLayout />}>
          <Route index={true} element={<LinkTreeView />} />
          <Route path="profile" element={<ProfileView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
