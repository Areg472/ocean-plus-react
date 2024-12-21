import { Navbar } from "./components/navbar.tsx";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer.tsx";

export function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
