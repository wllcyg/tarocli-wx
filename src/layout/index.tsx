import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
      <div>
        <nav>Navigation Bar</nav>
        <Outlet />
      </div>
    )
  }