import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";

export default function MasterLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
