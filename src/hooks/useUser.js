import { useEffect, useState } from "react";
import { getCurrentUser } from "../services/apiAuth";

function useUser() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const data = await getCurrentUser();
      setUser(data);
    }
    fetchUser();
    setIsLoading(false);
  }, []);
  return { user, isLoading };
}

export default useUser;
