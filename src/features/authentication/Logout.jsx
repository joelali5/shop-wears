import { IoMdLogIn } from "react-icons/io";
import { logout } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }
  return (
    <IoMdLogIn
      className="text-2xl cursor-pointer text-stone-300"
      onClick={handleLogout}
    />
  );
}

export default Logout;
