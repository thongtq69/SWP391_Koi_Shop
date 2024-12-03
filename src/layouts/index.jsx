import { Outlet } from "react-router-dom";
import "./index.css";
import AdminHeader from "./header/AdminHeader";

export const AdminLayout = () => {
  return (
    <div className="admin-layout-container">
      <AdminHeader />
      <Outlet />
    </div>
  );
};
