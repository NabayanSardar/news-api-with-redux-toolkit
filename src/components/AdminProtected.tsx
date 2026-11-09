// import { Navigate, Outlet } from "react-router-dom";
// import { useAppSelector } from "../hooks/useRedux";

import { Outlet } from "react-router-dom";

// const AdminProtected = () => {
//   const auth = useAppSelector((state) => state.auth);

//   const isAdminAuth = auth.token && auth?.user?.role === "admin";
//   return isAdminAuth ? <Outlet /> : <Navigate to="/login" />;
// };

// export default AdminProtected;

const AdminProtected = () => {
  return <Outlet />;
};
export default AdminProtected;
