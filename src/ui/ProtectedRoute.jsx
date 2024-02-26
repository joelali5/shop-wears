import { useEffect, useState } from "react";
import Loader from "./Loader";
import { getCurrentUser } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  //Load the authenticated user
  useEffect(() => {
    async function fetchUser() {
      const data = await getCurrentUser();
      setUser(data);
    }
    fetchUser();
    setIsLoading(false);
  }, []);
  //redirect to the login page if no authenticated user
  useEffect(() => {
    if (!user && !isLoading) navigate("/login");
  }, [user, isLoading, navigate]);

  //While loading, show a spinner
  if (isLoading) return <Loader />;

  //Render the app if there is an authenticated user
  if (user) return children;
}

export default ProtectedRoute;
