import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;