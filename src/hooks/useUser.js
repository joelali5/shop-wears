import { useEffect, useState } from "react";
import { getCurrentUser } from "../services/apiAuth";

function useUser() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [metaData, setMetaData] = useState("");

  useEffect(() => {
    async function fetchUser() {
      const data = await getCurrentUser();
      setUser(data);
      setMetaData(data.user_metadata);
    }
    fetchUser();
    setIsLoading(false);
  }, []);
  return { user, isLoading, metaData };
}

export default useUser;
