import Navbar from "@/components/Shared/Navbar";
// import "./globals.css";
import Footer from "@/components/Shared/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen">{children}</div>
      <Footer></Footer>
    </>
  );
}
