import { useEffect } from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { user, isLoading } = useUser();

  useEffect(() => {
    if (!user && !isLoading) navigate("/login");
  }, [user, isLoading, navigate]);

  if (isLoading) return <Loader />;

  if (user) return children;
}

export default ProtectedRoute;
