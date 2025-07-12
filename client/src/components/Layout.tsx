import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import WhatsAppButton from "./WhatsAppButton";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default Layout;