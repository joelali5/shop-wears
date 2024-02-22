import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";
import { Toaster } from "react-hot-toast";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <main className="overflow-scroll">
        <Toaster
          position="top-center"
          gutter={10}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: { background: "#f1f1f1", color: "#151515" },
          }}
        />
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
