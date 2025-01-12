import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/authContent";
import Loader from "../loader";

const Protected = () => {
  
  const { user, isLoading } = useAuth();


  if (isLoading) return <Loader designs="my-20 size-10" />;


  if (!user?.isSeller) return <Navigate to="/" replace />;


  return <Outlet />;
};

export default Protected;
