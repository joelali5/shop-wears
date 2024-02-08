import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Cart Overview</footer>
    </div>
  );
}

export default AppLayout;
