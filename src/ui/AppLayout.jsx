import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="overflow-scroll">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
